import {call, put, takeEvery} from "redux-saga/effects"
import { songSliceActions } from "./songReducer"
import { statisticsSliceActions } from "./stasticsReducer";
import axios from "axios"
import { PayloadAction } from "@reduxjs/toolkit";

//this code is work by setting return types any
function* songsFetch():any{
    //put is used for dispatch actions and call is used for api calls.
    //all songs in table with edit and delete functionaliy.
    //in artis page show all artists in grid and whe i click it it goes to artists detail page. and place about artist.
    //my expectation is place all albums are exither hipup,pop or etc not songs.
    try{
    const response=yield call(axios.get,"http://localhost:5000/api/songs/getAllsong");
    // console.log(response.data)
    yield put(songSliceActions.songSuccess(response.data))
    

    }catch(error){
      yield put(songSliceActions.songFailure((error as Error).message))
    }


}


function* songCreate(action: PayloadAction<any>): any {
  try {
    const response = yield call(axios.post, "http://localhost:5000/api/songs/createSongs", action.payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    yield put(songSliceActions.songCreatingSuccess(response.data));
    // yield call(songsFetch())
  } catch (error: any) {
    yield put(songSliceActions.songCreatingFailure(error.message));
  }
}

function* songUpdate(action:PayloadAction<any>):any{
    const {id,...updateData}=action.payload
  try{
    const response=yield call(axios.put,`http://localhost:5000/api/songs/${id}`,updateData,{
      headers:{
        "Content-Type":"application/json"
      }

    });
    yield put(songSliceActions.songUpdatingSuccess(response.data))

  }catch(error: any){
    yield put(songSliceActions.songUpdatingFailure(error.message))


  };
  

}
function* songDelete(action:PayloadAction<any>):any{
  const id=action.payload
  try{
       const response=yield call(axios.delete,`http://localhost:5000/api/songs/${id}`)
       yield put(songSliceActions.songDeletingSuccess("you delete song succesfully"))
       yield put(songSliceActions.songFetching());

  }catch(error:any){
    yield put(songSliceActions.songDeletingFailure(error.message))
  }

}
function* fetchStastics():any{
  try{

    const response=yield call(axios.get,"http://localhost:5000/api/stastics/numberSong")
    yield put(statisticsSliceActions.fetchStatisticsSuccess(response.data))

  }catch(error:any){
    yield put(statisticsSliceActions.fetchStatisticsFailure(error.message))
  }
}
function* fetchGenres():any{
  try{
      const response=yield call(axios.get,"http://localhost:5000/api/stastics/totalSongGenres")
      yield put(statisticsSliceActions.fetchGenreCountsSuccess(response.data))
  }
  catch(error:any){
    yield put(statisticsSliceActions.fetchStatisticsFailure(error.message))
  }
}

function* fetchResponse():any{
  try{
    const response=yield call(axios.get,"http://localhost:5000/api/stastics/totalSonginAlbum")
    yield put(statisticsSliceActions.fetchResponseDataSuccess(response.data))

  }catch(error:any){
    yield put(statisticsSliceActions.fetchStatisticsFailure(error.message))
  }
}


function* songSaga(){
    yield takeEvery(songSliceActions.songFetching.type,songsFetch)
    yield takeEvery(songSliceActions.songCreating.type, songCreate);
    yield takeEvery(songSliceActions.songUpdating.type,songUpdate)
    yield takeEvery(songSliceActions.songDeleting.type,songDelete)
    yield takeEvery(statisticsSliceActions.fetchStatisticsStart.type,fetchStastics)
    yield takeEvery(statisticsSliceActions.fetchStatisticsStart.type,fetchGenres)
    yield takeEvery(statisticsSliceActions.fetchStatisticsStart.type,fetchResponse)

}
export default songSaga
