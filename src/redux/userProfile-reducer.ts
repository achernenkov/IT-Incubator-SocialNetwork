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


let initialState = {

}

export const userProfileReducer = (state: UserProfileType | {} = initialState, action: TotalUserProfileAC): UserProfileType | {} => {
    switch (action.type) {
        default:
            return state
    }
}

export default userProfileReducer;