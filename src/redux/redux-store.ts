import {createStore, combineReducers, applyMiddleware} from 'redux'
import postReducer, {addPostDispatchType, postStateType} from "./post-reducer";
import messageReducer, {addMessageDispatchType, dialogsStateType} from "./dialogs-reducer";
import {
    FollowACType,
    pushUsersACType,
    setCurrentPageACType, setIsLoadingACType, setTotalUsersCountACType,
    UnFollowACType,
    usersReducer,
    UsersStateType
} from "./users-reducer";
import userProfileReducer, {SetDataUserProfileACType, UserProfileType} from './userProfile-reducer'
import {authReducer, AuthStateType, SetDataToAuthStateType} from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

// Type ----------------------------------------------------------------------------

export type RootStateType = {
    dialogsState: dialogsStateType
    postState: postStateType
    usersState: UsersStateType
    userProfileState: UserProfileType
    auth: AuthStateType
}

export type actionType = addPostDispatchType
    | addMessageDispatchType
    | FollowACType
    | UnFollowACType
    | pushUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setIsLoadingACType
    | SetDataUserProfileACType
    | SetDataToAuthStateType

export type dispatchType = (action: actionType) => void

// End Type -------------------------------------------------------------------------


const reducers = combineReducers({
    dialogsState: messageReducer,
    postState: postReducer,
    usersState: usersReducer,
    userProfileState: userProfileReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunk))


export default store;