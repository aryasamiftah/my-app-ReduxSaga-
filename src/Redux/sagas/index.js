import { takeEvery, all, take } from "redux-saga/effects";
import { handleRegion, handleAddRegion, handleUpdateRegion, handleDeleteRegion } from "./regionSaga";
import ActionTypes from "../Constant/ActionType";

function* watchAll(){
    yield all([
        takeEvery(ActionTypes.GET_REGION,handleRegion),
        takeEvery(ActionTypes.ADD_REGION,handleAddRegion),
        takeEvery(ActionTypes.UPDATE_REGION,handleUpdateRegion),
        takeEvery(ActionTypes.DEL_REGION,handleDeleteRegion)
    ])
}

export default watchAll