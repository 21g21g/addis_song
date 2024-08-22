import { configureStore } from "@reduxjs/toolkit";
import songSaga from "./songSaga";
import createSagaMiddleware from "redux-saga"
import songSlice from "./songReducer";
import statisticsSlice from "./stasticsReducer";

const sagaMiddleware=createSagaMiddleware()
export const store=configureStore({
    reducer:{
        song:songSlice.reducer,
        stastics:statisticsSlice.reducer,
        
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),


});
//inorder to start the saga
sagaMiddleware.run(songSaga)
export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch
