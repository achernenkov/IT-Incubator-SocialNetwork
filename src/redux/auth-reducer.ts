export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
}

let initialState = {
    id: null,
    login: null,
    email: null,
}

export type SetDataToAuthStateType = {
    type: 'SET-DATA-AUTH-STATE'
    payload: {
        id: number
        login: string
        email: string
    }
}

export type AuthActionTotalType = SetDataToAuthStateType

export let setDataToAuthState = (id: number, login: string, email: string): SetDataToAuthStateType => {
    return {type: "SET-DATA-AUTH-STATE", payload: {id, login, email}}
}

export let authReducer = (state:AuthStateType = initialState, action: any ): AuthStateType => {
    switch (action.type){
        case "SET-DATA-AUTH-STATE":
            return {...action.payload}
        default:
            return state
    }
}