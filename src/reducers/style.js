import {SET_STYLE} from "../actions/styleActions";

const initialState = {
    style: null
};

export function styleReducer(state = initialState, action) {
    if(action.type === SET_STYLE){
        return {...state, style: action.payload}
    }
    return state
}