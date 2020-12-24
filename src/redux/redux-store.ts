import {createStore, combineReducers} from 'redux'
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
import userProfileReducer, {UserProfileType} from './userProfile-reducer'

// Type ----------------------------------------------------------------------------

export type RootStateType = {
    dialogsState: dialogsStateType
    postState: postStateType
    usersState: UsersStateType
    userProfileState: UserProfileType
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

export type dispatchType = (action: actionType) => void

// End Type -------------------------------------------------------------------------


const reducers = combineReducers({
    dialogsState: messageReducer,
    postState: postReducer,
    usersState: usersReducer,
    userProfileState: userProfileReducer
})

let store = createStore(reducers)


export default store;