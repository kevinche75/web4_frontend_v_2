import axios from "axios";
import {SET_TABLE} from "./pageActions";

export const SET_USER_MESSAGE = 'SET_USER_MESSAGE';
export const REGISTER = 'REGISTER';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const SET_SIGN_IN = "SET_SIGN_IN";
export const SET_NAME = "SET_NAME";

export function setUserMessage(userMessage) {
    return{
        type: SET_USER_MESSAGE,
        payload: userMessage
    }
}

export function setLoginIn(flag) {
    return{
        type: SET_SIGN_IN,
        payload: flag,
    }
}

export function logout() {
    return dispatch => {
        axios.get("http://localhost:12600/logout", {
            withCredentials: true,
        })
            .then(result => {
                console.log(result)
            })
            .catch(result => console.log(result));
        dispatch({
            type: LOGOUT,
            payload: false,
        });
        dispatch({
            type: SET_TABLE,
            payload: [],
        });
        localStorage.removeItem("loginIn");
    }
}

export function login(butch) {
    return dispatch => {
        let header = 'Basic ' + btoa(butch.username + ':' + butch.password);
        axios({
            url: 'http://localhost:12600/login',
            method: 'post',
            headers: {
                Authorization: header
            },
        })
            .then(result => {
                console.log(result);
                if (result.status == 200) {
                    localStorage.setItem("loginIn", header);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: "Welcome!",
                });
                dispatch({
                    type: SET_SIGN_IN,
                    payload: true,
                });
                } else {
                    dispatch({
                        type: LOGIN_FAIL,
                        payload: "Incorrect login or password",
                    })
                }
            })
            .catch(result => {
                console.log(result);
                dispatch({
                    type: LOGIN_FAIL,
                    payload: "Incorrect login or password",
                })
            });
    }
}

export function register(butch) {
    return dispatch => {
        axios({
            method: "post",
            url: 'http://localhost:12600/register',
            data: butch,
        })
            .then(result => {
                console.log(result);
                    if (Number(result.status) === 201) {
                        dispatch({
                            type: REGISTER,
                            payload: "You was successfully registered"
                        })
                    } else {
                            dispatch({
                                type: REGISTER,
                                payload: "Such user has already existed",
                            });
                    }
            })
            .catch(result => {
                console.log(result);
                    dispatch({
                        type: REGISTER,
                        payload: "Such user has already existed",
                    });
            })
        ;
    }
}