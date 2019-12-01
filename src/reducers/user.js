import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER, SET_SIGN_IN, SET_USER_MESSAGE} from "../actions/userActions";

const initialState = {
    name: '',
    isLogin: false,
    userMessage: "",
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_MESSAGE:
            return {...state, userMessage: action.payload};
        case REGISTER:
            return {...state, userMessage: action.payload};
        case LOGIN_FAIL:
            return {...state, userMessage: action.payload};
        case LOGIN_SUCCESS:
            return {...state, userMessage: action.payload};
        case LOGOUT:
            return {...state, isLogin: action.payload,};
        case SET_SIGN_IN:
            return {...state, isLogin: action.payload};
        default:
            return state;
    }
}