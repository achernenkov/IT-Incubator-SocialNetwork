import {createStore, combineReducers, applyMiddleware} from 'redux'
import postReducer, {addPostDispatchType, changePostTextDispatchType, postStateType} from "./post-reducer";
import messageReducer, {addMessageDispatchType, changeMessageDispatchType, dialogsStateType} from "./dialogs-reducer";
import {
    FollowACType,
    pushUsersACType,
    setCurrentPageACType, setIsLoadingACType, setTotalUsersCountACType,
    UnFollowACType,
    usersReducer,
    UsersStateType
} from "./users-reducer";
import userProfileReducer, {SetDataUserProfileAC, UserProfileType} from './userProfile-reducer'
import {authReducer, AuthStateType, SetDataToAuthStateType} from "./auth-reducer";
import thunk from "redux-thunk";

// Type ----------------------------------------------------------------------------

export type RootStateType = {
    dialogsState: dialogsStateType
    postState: postStateType
    usersState: UsersStateType
    userProfileState: UserProfileType
    auth: AuthStateType
}

export type actionType = addPostDispatchType
    | changePostTextDispatchType
    | addMessageDispatchType
    | changeMessageDispatchType
    | FollowACType
    | UnFollowACType
    | pushUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | setIsLoadingACType
    | SetDataUserProfileAC
    | SetDataToAuthStateType

export type dispatchType = (action: actionType) => void

// End Type -------------------------------------------------------------------------


const reducers = combineReducers({
    dialogsState: messageReducer,
    postState: postReducer,
    usersState: usersReducer,
    userProfileState: userProfileReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk))


export default store;