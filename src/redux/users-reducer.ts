type UsersLocationType = {
    county: string
    city: string
}

export type UsersStateType = {
    id: number
    avatar: string
    name: string
    status: string
    location: UsersLocationType
    followed: boolean
}

export type FollowACType = {
    type: 'FOLLOW'
    userID: number
}

export type UnFollowACType = {
    type: 'UNFOLLOW'
    userID: number
}

type UsersACType = FollowACType | UnFollowACType

const initialState = [
    {
        id: 1,
        avatar: 'https://assets.faceit-cdn.net/avatars/3ab63293-7796-4c0e-b7ef-2a0e461caad9_1556910015746.jpg',
        name: 'Andrey',
        status: 'Hello, World!',
        location: {
            county: "Belarus",
            city: 'Minsk'
        },
        followed: true

    },
    {
        id: 2,
        avatar: 'https://assets.faceit-cdn.net/avatars/3ab63293-7796-4c0e-b7ef-2a0e461caad9_1556910015746.jpg',
        name: 'Misha',
        status: 'Hello, Russia!',
        location: {
            county: "Russia",
            city: 'Moskov'
        },
        followed: false

    },
    {
        id: 3,
        avatar: 'https://assets.faceit-cdn.net/avatars/3ab63293-7796-4c0e-b7ef-2a0e461caad9_1556910015746.jpg',
        name: 'Kostya',
        status: 'Hello, Kiyv!',
        location: {
            county: "Ukraine",
            city: 'Kiev'
        },
        followed: false

    },
    {
        id: 4,
        avatar: 'https://assets.faceit-cdn.net/avatars/3ab63293-7796-4c0e-b7ef-2a0e461caad9_1556910015746.jpg',
        name: 'Nikita',
        status: 'Hello, LA!',
        location: {
            county: "USA",
            city: 'Kalifornia'
        },
        followed: true

    }
]


// AC

export const followAC = (userID: number): FollowACType => ({type: 'FOLLOW', userID: userID})

export const unFollowAC = (userID: number): UnFollowACType => ({type: 'UNFOLLOW', userID: userID})


// Reducer users

export const usersReducer = (state: Array<UsersStateType> = initialState, action: UsersACType) => {
    debugger
    switch (action.type) {
        case "FOLLOW":
            return [
                ...state.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            ]
        case "UNFOLLOW":
            return [
                ...state.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            ]
        default:
            return state
    }
}

export default usersReducer