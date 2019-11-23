import {SET_USER_MESSAGE} from "../actions/userActions";

const initialState = {
    name: '',
    isLogin: false,
    userMessage: "",
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_MESSAGE:
            return {...state, userMessage: action.payload};
        default:
            return state;
    }
}