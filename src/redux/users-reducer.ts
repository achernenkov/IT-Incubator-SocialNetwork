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

export type setTotalUsersCountACType = {
    type: 'TOTAL-USERS-COUNT'
    totalUsersCount: number
}

type UsersACType = FollowACType | UnFollowACType | pushUsersACType | setCurrentPageACType | setTotalUsersCountACType

const initialState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 40,
    currentPage: 1
}


// AC

export const followAC = (userID: number): FollowACType => ({type: 'FOLLOW', userID: userID})

export const unFollowAC = (userID: number): UnFollowACType => ({type: 'UNFOLLOW', userID: userID})

export const pushUsersAC = (users: Array<UsersArrayType>): pushUsersACType => ({type: 'SET-USERS', users})

export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: "SET-CURRENT-PAGE", currentPage})

export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountACType => ({type: "TOTAL-USERS-COUNT", totalUsersCount})
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
        default:
            return state
    }
}

export default usersReducer