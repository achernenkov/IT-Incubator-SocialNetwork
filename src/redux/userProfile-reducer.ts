import {Dispatch} from "redux";
import {userProfileAPI, usersAPI} from "../api/api";

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
    status: string
}


export type SetDataUserProfileACType = {
    type: 'SET-DATA-USER-PROFILE'
    UserProfile: UserProfileType
}

export type SetUserStatusACType = {
    type: 'SET-USER-STATUS'
    payload:{
        status: string
    }
}


export type UpdateUserStatusACType = {
    type: 'UPDATE-USER-STATUS'
    payload: {
        status: string
    }
}



export type TotalUserProfileAC = SetDataUserProfileACType | SetUserStatusACType | UpdateUserStatusACType

export const setUserStatusAC = (status: string): SetUserStatusACType => {
    return {type: 'SET-USER-STATUS', payload:{status}}
}

export const updateUserStatusAC = (status: string): UpdateUserStatusACType => {
    return {type: 'UPDATE-USER-STATUS', payload:{status}}
}

export const setDataUserProfilAC = (UserProfile: UserProfileType): SetDataUserProfileACType => {
    return {type: "SET-DATA-USER-PROFILE", UserProfile}
}


let initialState = {

}

export const userProfileReducer = (state: UserProfileType | {} = initialState, action: TotalUserProfileAC): UserProfileType | {} => {
    switch (action.type) {
        case "SET-DATA-USER-PROFILE":
            return {...action.UserProfile}
        case "SET-USER-STATUS":
            debugger
            return {...state, ...action.payload}
        case "UPDATE-USER-STATUS":
            return {...state, ...action.payload}
        default:
            return state
    }
}


// thunk

export const setUsersDataTC = (userID:string) => (dispatch: Dispatch) => {
    usersAPI.getUserData(userID).then(response => {
        dispatch(setDataUserProfilAC(response))
    })
}

export const setUserStatusTC = (userID: string) => (dispatch: Dispatch) => {
    userProfileAPI.getUserStatus(userID).then(response => {
        dispatch(setUserStatusAC(response.data))
    })
}

export const updateUserStatusTC = (newStatus: string) => (dispatch: Dispatch) => {
    userProfileAPI.updateUserStatus(newStatus).then(response => {
        if(!response.data.resultCode){
            dispatch(updateUserStatusAC(newStatus))
        }
    })
}


export default userProfileReducer;