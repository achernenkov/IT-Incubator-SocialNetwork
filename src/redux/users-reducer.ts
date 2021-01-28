import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type UsersArrayType = {
    name: string
    id: number
    followed: boolean
    uniqueUrlName: null
    status: string | null
    photos: {
        small: string | undefined
        large: string | undefined
    }
}

export type UsersStateType = {
    users: Array<UsersArrayType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    idUsersLoadingFollow: Array<number>
}

export type FollowACType = {
    type: 'FOLLOW'
    userID: number
}

export type UnFollowACType = {
    type: 'UNFOLLOW'
    userID: number
}

export type pushUsersACType = {
    type: 'SET-USERS'
    users: Array<UsersArrayType>
}

export type setCurrentPageACType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}

export type setTotalUsersCountACType = {
    type: 'TOTAL-USERS-COUNT'
    totalUsersCount: number
}

export type setIsLoadingACType = {
    type: 'SET-IS-LOADING'
    isLoading: boolean
}

export type setIsLoadingFollowACType = {
    type: 'SET-IS-LOADING-FOLLOW'
    isLoadingFollow: boolean
    userID: number
}

type UsersACType = FollowACType
    | UnFollowACType
    | pushUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setIsLoadingACType
    | setIsLoadingFollowACType

const initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    idUsersLoadingFollow: []
}


// AC

export const followSuccess = (userID: number): FollowACType => ({type: 'FOLLOW', userID: userID})

export const unFollowSuccess = (userID: number): UnFollowACType => ({type: 'UNFOLLOW', userID: userID})

export const pushUsers = (users: Array<UsersArrayType>): pushUsersACType => ({type: 'SET-USERS', users})

export const setCurrentPage = (currentPage: number): setCurrentPageACType => ({type: "SET-CURRENT-PAGE", currentPage})

export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountACType => ({
    type: "TOTAL-USERS-COUNT",
    totalUsersCount
})

export const setIsLoading = (isLoading: boolean): setIsLoadingACType => ({type: "SET-IS-LOADING", isLoading})

export const setIsLoadingFollow = (isLoadingFollow: boolean, userID: number): setIsLoadingFollowACType => ({
    type: 'SET-IS-LOADING-FOLLOW',
    isLoadingFollow,
    userID
})

// Reducer users

export const usersReducer = (state: UsersStateType = initialState, action: UsersACType) => {
    switch (action.type) {
        case "SET-USERS": {
            return {...state, users: [...action.users]}
        }
        case "FOLLOW":
            return {
                ...state, users: [
                    ...state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: true}
                        }
                        return u
                    })
                ]
            }
        case "UNFOLLOW":
            return {
                ...state, users: [
                    ...state.users.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false}
                        }
                        return u
                    })
                ]
            }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        case "TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "SET-IS-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-IS-LOADING-FOLLOW":
            return action.isLoadingFollow ?
                {...state, idUsersLoadingFollow: [...state.idUsersLoadingFollow, action.userID]}
                :
                {...state, idUsersLoadingFollow: [...state.idUsersLoadingFollow.filter(el => el != action.userID)]}
        default:
            return state
    }
}


// thunk

export const getUsers = (currentPage:number, pageSize:number) => (dispatch: Dispatch) => {
    dispatch(setIsLoading(true))

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(setIsLoading(false))
        dispatch(pushUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    })
}

export const follow = (id:number) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingFollow(true, id))
    usersAPI.follow(id).then(resultCode => {
        if(resultCode === 0){dispatch(followSuccess(id))}
       dispatch(setIsLoadingFollow(false, id))
    })
}

export const unFollow = (id:number) => (dispatch: Dispatch) => {
   dispatch(setIsLoadingFollow(true, id))
    usersAPI.unFollow(id).then(resultCode => {
        if(resultCode === 0){dispatch(unFollowSuccess(id))}
        dispatch(setIsLoadingFollow(false, id))
    })
}

export default usersReducer