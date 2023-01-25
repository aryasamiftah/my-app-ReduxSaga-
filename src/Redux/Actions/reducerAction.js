import ActionTypes from "../Constant/ActionType";
import apiRegion from "../Services/apiRegion";

// export const createRegions = (regions) => async (dispatch) => {
//     try {
//         const res = await apiRegion.create({regions});
//         dispatch({
//             type : ActionTypes.ADD_REGION,
//             payload : res.data
//         });
        
//         return Promise.resolve(res.data)
//     }catch(err){
//         return Promise.reject(err)
//     }
// };

// export const getRegions = () => async (dispatch) => {
//     try {
//         const res = await apiRegion.getAll();
//         dispatch({
//             type : ActionTypes.GET_REGION,
//             payload : res.data
//         });

//     }catch (err) {
//         return err
//     }
// };

// export const updateRegions = (id, data) => async (dispatch) => {
//     try {
//         const res = await apiRegion.update(id, data);
//         console.log(res.data)
//         dispatch({
//             type : ActionTypes.UPDATE_REGION,
//             payload : data
//         });
        
//         return Promise.resolve(res.data)
//     }catch (err) {
//         return Promise.reject(err)
//     }
// };

// export const removeRegions = (id) => async (dispatch) => {
//     try {
//         const res = await apiRegion.remove(id);

//         dispatch({
//             type : ActionTypes.DEL_REGION,
//             payload : id
//         });
//         console.log(res.data)

//         return Promise.resolve(res.data)
//     }catch(err) {
//         return Promise.reject(err)
//     }
// }

const getRegionsData=()=>{
    return {
        type:ActionTypes.GET_REGION,
    }
}

const getRegionsDataSuccess=(payload)=>{
    return {
        type:ActionTypes.GET_REGION_SUCCEED,
        payload
    }
}

const getRegionsDataFailed=(payload)=>{
    return {
        type:ActionTypes.GET_REGION_FAILED,
        payload
    }
}

const createRegionsData=(payload)=>{
    return {
        type : ActionTypes.ADD_REGION,
        payload
    }
}

const createRegionsDataSuccess=(payload)=>{
    return {
        type : ActionTypes.ADD_REGION_SUCCEED,
        payload
    }
}

const createRegionsDataFailed=(payload)=>{
    return {
        type : ActionTypes.ADD_REGION_FAILED,
        payload
    }
}

const updateRegionsData=(payload)=>{
    return {
        type : ActionTypes.UPDATE_REGION,
        payload
    }
}

const updateRegionsDataSuccess=(payload)=>{
    return {
        type : ActionTypes.UPDATE_REGION_SUCCEED,
        payload
    }
}

const updateRegionsDataFailed=(payload)=>{
    return {
        type : ActionTypes.UPDATE_REGION_FAILED,
        payload
    }
}

const deleteRegionsData=(payload)=> {
    return {
        type : ActionTypes.DEL_REGION,
        payload
    }
}

const deleteRegionsDataSuccess=(payload)=> {
    return {
        type : ActionTypes.DEL_REGION_SUCCEED,
        payload
    }
}

const deleteRegionsDataFailed=(payload)=> {
    return {
        type : ActionTypes.DEL_REGION_FAILED,
        payload
    }
}

export {
    getRegionsData,
    getRegionsDataSuccess,
    getRegionsDataFailed,
    createRegionsData,
    createRegionsDataSuccess,
    createRegionsDataFailed,
    updateRegionsData,
    updateRegionsDataSuccess,
    updateRegionsDataFailed,
    deleteRegionsData,
    deleteRegionsDataSuccess,
    deleteRegionsDataFailed
}