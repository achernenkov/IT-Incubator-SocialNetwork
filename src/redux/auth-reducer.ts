export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
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

export let authReducer = (state:AuthStateType = initialState, action: AuthActionTotalType ): AuthStateType => {
    switch (action.type){
        case "SET-DATA-AUTH-STATE":

            let isAuth

            if(action.payload.login === undefined){
                isAuth = false
            }else {
                isAuth = true
            }

            return {isAuth: isAuth, ...action.payload}
        default:
            return state
    }
}