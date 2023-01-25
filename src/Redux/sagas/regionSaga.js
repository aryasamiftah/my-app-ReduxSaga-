import {call, put} from "redux-saga/effects"
import apiRegion from "../Services/apiRegion"
import {getRegionsData,getRegionsDataSuccess,getRegionsDataFailed,createRegionsData,createRegionsDataSuccess,createRegionsDataFailed,updateRegionsData,updateRegionsDataFailed,updateRegionsDataSuccess,deleteRegionsData,deleteRegionsDataFailed,deleteRegionsDataSuccess} from "../Actions/reducerAction"

function* handleRegion(){
    try {
        const result = yield call(apiRegion.getAll);
        yield put (getRegionsDataSuccess(result.data))
        // console.log(result.data)
    }catch(err){
        yield put (getRegionsDataFailed(err))
    }
}

function* handleAddRegion(action){
    try {  
        const result = yield call(apiRegion.create,action.payload)
        yield put(createRegionsDataSuccess(result.data))
    }catch(err){
        yield put(createRegionsDataFailed(err))
    }
}

function* handleUpdateRegion(action){
    try{
        const result = yield call(apiRegion.update, action.payload)
        yield put(updateRegionsDataSuccess(result.data))
    }catch(err){
        yield put(updateRegionsDataFailed(err))
    }
}

function* handleDeleteRegion(action){
    try {
        yield call(apiRegion.remove,action.payload)
        yield put(deleteRegionsDataSuccess(action.payload))
    }catch(err){
        yield put(deleteRegionsDataFailed(err))
    }
}

export {
    handleAddRegion,
    handleDeleteRegion,
    handleRegion,
    handleUpdateRegion
}