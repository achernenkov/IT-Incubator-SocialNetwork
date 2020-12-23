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

type UsersACType = FollowACType | UnFollowACType | pushUsersACType | setCurrentPageACType

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 1
}


// AC

export const followAC = (userID: number): FollowACType => ({type: 'FOLLOW', userID: userID})

export const unFollowAC = (userID: number): UnFollowACType => ({type: 'UNFOLLOW', userID: userID})

export const pushUsersAC = (users: Array<UsersArrayType>): pushUsersACType => ({type: 'SET-USERS', users})

export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: "SET-CURRENT-PAGE", currentPage})
// Reducer users

export const usersReducer = (state: UsersStateType = initialState, action: UsersACType) => {
    switch (action.type) {
        case "SET-USERS":{
            debugger
           return  {...state, users: [...action.users] }
        }
        case "FOLLOW":
            return {...state, users: [
                ...state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            ]}
        case "UNFOLLOW":
            return {...state, users: [
                ...state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            ]}
        case "SET-CURRENT-PAGE":
            debugger
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}

export default usersReducer