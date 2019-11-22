import {SET_R, SET_X, SET_MESSAGE_X, SET_MESSAGE_R, SET_MESSAGE_Y, SET_Y} from "../actions/pageActions";

const initialState = {
    x: null,
    y: null,
    r: 0,
    table: [
        {
            x: 2,
            y: 3,
            r: 1,
            hit: true
        }
    ],
    messageX: "",
    messageY: "",
    messageR: "",
};

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_R:
            return {...state, r: action.payload};
        case SET_X:
            return {...state, x: action.payload};
        case SET_Y:
            return {...state, y: action.payload};
        case SET_MESSAGE_R:
            return {...state, messageR: action.payload};
        case SET_MESSAGE_X:
            return {...state, messageX: action.payload};
        case SET_MESSAGE_Y:
            return {...state, messageY: action.payload};
        default:
            return state;
    }
}