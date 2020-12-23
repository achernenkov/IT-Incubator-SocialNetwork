import {createStore, combineReducers} from 'redux'
import postReducer, {addPostDispatchType, changePostTextDispatchType, postStateType} from "./post-reducer";
import messageReducer, {addMessageDispatchType, changeMessageDispatchType, dialogsStateType} from "./dialogs-reducer";
import {
    FollowACType,
    pushUsersACType,
    setCurrentPageACType,
    UnFollowACType,
    usersReducer,
    UsersStateType
} from "./users-reducer";

// Type ----------------------------------------------------------------------------

export type RootStateType = {
    dialogsState: dialogsStateType
    postState: postStateType
    usersState: UsersStateType
}

export type actionType = addPostDispatchType
    | changePostTextDispatchType
    | addMessageDispatchType
    | changeMessageDispatchType
    | FollowACType
    | UnFollowACType
    | pushUsersACType
    | setCurrentPageACType

export type dispatchType = (action: actionType) => void

// End Type -------------------------------------------------------------------------


const reducers = combineReducers({
    dialogsState: messageReducer,
    postState: postReducer,
    usersState: usersReducer
})

let store = createStore(reducers)


export default store;