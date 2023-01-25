import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import regionReducers from "../Reducer/regionReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from '../sagas'

const saga = createSagaMiddleware();

const reducer = combineReducers({
  regionReducers: regionReducers,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(saga),
});

saga.run(rootSaga)

export default store;
