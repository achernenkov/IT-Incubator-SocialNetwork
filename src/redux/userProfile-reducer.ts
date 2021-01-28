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


export type SetDataUserProfileAC = {
    type: 'SET-DATA-USER-PROFILE'
    UserProfile: UserProfileType
}


export type TotalUserProfileAC = SetDataUserProfileAC

export const SetDataUserProfil = (UserProfile: UserProfileType): SetDataUserProfileAC => {
    return {type: "SET-DATA-USER-PROFILE", UserProfile}
}


let initialState = {

}

export const userProfileReducer = (state: UserProfileType | {} = initialState, action: TotalUserProfileAC): UserProfileType | {} => {
    switch (action.type) {
        case "SET-DATA-USER-PROFILE":
            return {...action.UserProfile}
        default:
            return state
    }
}


// thunk

export const setUsersData = (userID:string) => (dispatch: Dispatch) => {
    usersAPI.getUserData(userID).then(respons => {
        dispatch(SetDataUserProfil(respons))
    })

}

export default userProfileReducer;