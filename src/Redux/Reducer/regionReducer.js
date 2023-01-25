import ActionTypes from "../Constant/ActionType";

const initialState = {
    regions : []
};

function regionReducers(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_REGION:
            return {...state};
        case ActionTypes.GET_REGION_SUCCEED:
            return {...state, regions:action.payload};        
        case ActionTypes.ADD_REGION:
            return {...state};
        case ActionTypes.ADD_REGION_SUCCEED:
            return {...state, regions : [...state.regions, action.payload]};    
        case ActionTypes.UPDATE_REGION:
            return {...state};
        case ActionTypes.UPDATE_REGION_SUCCEED:
            return applyUpdateRegion({state, action});
        case ActionTypes.DEL_REGION:
            return {...state};    
        case ActionTypes.DEL_REGION_SUCCEED:
            return {
                ...state,
                regions : state.regions.filter(region => region.regionId !=action.payload.id)
            }
        default:
            return {...state, regions : action.payload}
    }
};

const applyUpdateRegion = async (state, action) => {
    return state.regions.map((regions) => {
        if(regions.regionId === action.payload.regionId){
            return {
                ...state,
                ...action.payload,
            };
        }else {
            return state;
        }
    });
};

export default regionReducers