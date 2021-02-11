import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {actionType, RootStateType} from "./redux-store";

export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export type SetDataToAuthStateType = {
    type: 'SET-DATA-AUTH-STATE'
    payload: {
        id: number | null
        login: string | null
        email: string | null
    }
}

export type AuthActionTotalType = SetDataToAuthStateType

export let setDataToAuthState = (id: number | null, login: string | null, email: string | null): SetDataToAuthStateType => {
    return {type: "SET-DATA-AUTH-STATE", payload: {id, login, email}}
}

export let authReducer = (state:AuthStateType = initialState, action: AuthActionTotalType ): AuthStateType => {
    switch (action.type){
        case "SET-DATA-AUTH-STATE":

            let isAuth

            if(action.payload.login === undefined){
                isAuth = false
            }else {
                isAuth = true
            }

            return {isAuth: isAuth, ...action.payload}
        default:
            return state
    }
}


// thunk

type ThunkType = ThunkAction<void, RootStateType, unknown, actionType>

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(data => {
        let {id, login, email} = data.data
        dispatch(setDataToAuthState(id, login, email))
    })
}

export const logInUserTC = (login: string, pass: string, remember: boolean): ThunkType => (dispatch: ThunkDispatch<RootStateType, unknown, actionType >) => {
    authAPI.logIN(login,pass,remember).then(response => {
        if(!response){
            dispatch(getAuthUserDataTC)
        }
    })
}

export const logOutUserTC = () => (dispatch: Dispatch) => {
    authAPI.logOut().then(response => {
        if(!response){
            dispatch(setDataToAuthState(null, null, null))
        }
    })
}