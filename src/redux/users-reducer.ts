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

type UsersACType = FollowACType
    | UnFollowACType
    | pushUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setIsLoadingACType

const initialState: UsersStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}


// AC

export const followAC = (userID: number): FollowACType => ({type: 'FOLLOW', userID: userID})

export const unFollowAC = (userID: number): UnFollowACType => ({type: 'UNFOLLOW', userID: userID})

export const pushUsersAC = (users: Array<UsersArrayType>): pushUsersACType => ({type: 'SET-USERS', users})

export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: "SET-CURRENT-PAGE", currentPage})

export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountACType => ({type: "TOTAL-USERS-COUNT", totalUsersCount})

export const setIsLoadingAC = (isLoading: boolean) : setIsLoadingACType => ({type: "SET-IS-LOADING", isLoading})

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
            return {...state, currentPage: action.currentPage}
        case "TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "SET-IS-LOADING":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export default usersReducer