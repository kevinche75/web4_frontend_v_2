export const SET_R = 'SET_R';
export const SET_X = 'SET_X';
export const SET_Y = 'SET_Y';
export const SET_MESSAGE_X = "SET_MESSAGE_X";
export const SET_MESSAGE_Y = "SET_MESSAGE_Y";
export const SET_MESSAGE_R = "SET_MESSAGE_R";
export const SET_CANVAS_WIDTH = "SET_CANVAS_WIDTH";
export const SET_DEVICE_TYPE = "SET_DEVICE_TYPE";
export const SET_OPENED_COMPONENT = "SET_OPENED_COMPONENT";

export function setOpenedComponent(component) {
    return{
        type: SET_OPENED_COMPONENT,
        payload: component
    }
}

export function setDeviceType(type) {
    return{
        type: SET_DEVICE_TYPE,
        payload: type,
    }
}

export function setCanvasWidth(width) {
 return{
     type: SET_CANVAS_WIDTH,
     payload: width
 }
}

export function setR(r) {
    return{
        type: SET_R,
        payload: r
    }
}

export function setX(x) {
    return{
        type: SET_X,
        payload: x
    }
}

export function setY(y) {
    return{
        type: SET_Y,
        payload: y
    }
}

export function setMessageX(messageX) {
    return{
        type: SET_MESSAGE_X,
        payload: messageX
    }
}

export function setMessageY(messageY) {
    return{
        type: SET_MESSAGE_Y,
        payload: messageY
    }
}

export function setMessageR(messageR) {
    return{
        type: SET_MESSAGE_R,
        payload: messageR
    }
}