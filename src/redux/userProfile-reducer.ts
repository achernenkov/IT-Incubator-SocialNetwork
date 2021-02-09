import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

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
}


export type SetDataUserProfileACType = {
    type: 'SET-DATA-USER-PROFILE'
    UserProfile: UserProfileType
}

export type SetUserStatusACType = {
    type: 'SET-USER-STATUS'
    payload:{
        newStatus: string
    }
}


export type UpdateUserStatusACType = {
    type: 'UPDATE-USER-STATUS'
    payload: {
        newStatus: string
    }
}



export type TotalUserProfileAC = SetDataUserProfileACType | SetUserStatusACType | UpdateUserStatusACType

export const setUserStatusAC = (newStatus: string): SetUserStatusACType => {
    return {type: 'SET-USER-STATUS', payload:{newStatus}}
}

export const updateUserStatusAC = (newStatus: string): UpdateUserStatusACType => {
    return {type: 'UPDATE-USER-STATUS', payload:{newStatus}}
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
            return {state, ...action.payload}
        case "UPDATE-USER-STATUS":
            return {state, ...action.payload}
        default:
            return state
    }
}


// thunk

export const setUsersData = (userID:string) => (dispatch: Dispatch) => {
    usersAPI.getUserData(userID).then(respons => {
        dispatch(setDataUserProfilAC(respons))
    })
}

export default userProfileReducer;