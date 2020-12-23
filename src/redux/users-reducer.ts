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

type UsersACType = FollowACType | UnFollowACType | pushUsersACType

const initialState: UsersStateType = {
    users: []
}


// AC

export const followAC = (userID: number): FollowACType => ({type: 'FOLLOW', userID: userID})

export const unFollowAC = (userID: number): UnFollowACType => ({type: 'UNFOLLOW', userID: userID})

export const pushUsersAC = (users: Array<UsersArrayType>): any => ({type: 'SET-USERS', users})

// Reducer users

export const usersReducer = (state: UsersStateType = initialState, action: UsersACType) => {
    switch (action.type) {
        case "SET-USERS":{
            debugger
           return  {...state, users: [...action.users] }
        }
        // case "FOLLOW":
        //     return [
        //         ...state.map(u => {
        //             if (u.id === action.userID) {
        //                 return {...u, followed: true}
        //             }
        //             return u
        //         })
        //     ]
        // case "UNFOLLOW":
        //     return [
        //         ...state.map(u => {
        //             if (u.id === action.userID) {
        //                 return {...u, followed: false}
        //             }
        //             return u
        //         })
        //     ]
        default:
            return state
    }
}

export default usersReducer