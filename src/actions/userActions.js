export const SET_USER_MESSAGE = 'SET_USER_MESSAGE';

export function setUserMessage(userMessage) {
    return{
        type: SET_USER_MESSAGE,
        payload: userMessage
    }
}