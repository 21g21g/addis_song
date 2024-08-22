import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface song {
  
    title:string[];
    artist:{
        artistImage:{
          public_id: string;
         url: string;
        };
        name:string;
        about:string;
    },
    album:{
        albumImage:{
          public_id: string;
         url: string;
        };
        name:string;
    },
    genre:string

}

interface songState {
    songs:song[];
    loading:boolean;
    error:string|null;
}
const initialState:songState={
    songs:[],
    loading:false,
    error:null,

}
const songSlice=createSlice({
    name:"song",

    initialState,

    reducers:{
        songFetching(state){
            state.loading=true;
            state.error=null;

        },
        songSuccess(state,action:PayloadAction<song[]>){
            state.loading=false;
            state.songs=action.payload;


        },

        songFailure(state,action:PayloadAction<string>){
            state.loading=false;
            state.error=action.payload;

        },
        songCreating(state, action: PayloadAction<song>) {
            state.loading = true;
            state.error = null;
          },
          songCreatingSuccess(state, action: PayloadAction<song>) {
            state.songs.push(action.payload);
            state.loading = false;
          },
          songCreatingFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
          },
          songUpdating(state,action:PayloadAction<song>){
            state.loading=true;
            state.error=null;
          },
          songUpdatingSuccess(state,action:PayloadAction<song>){
            state.loading=false;
            state.songs.push(action.payload);
            

          },
          songUpdatingFailure(state,action:PayloadAction<string>){
            state.loading=false;
            state.error=action.payload;

          },
          songDeleting(state,action:PayloadAction<any>){
            
            state.loading=true;
            state.error=null;
          },
          
          songDeletingSuccess(state,action:PayloadAction<string>){
            state.loading=false;
          },
          songDeletingFailure(state,action:PayloadAction<string>){

            state.loading=false;
            state.error=action.payload;


          }



    }

})

export const songSliceActions=songSlice.actions
export default songSlice