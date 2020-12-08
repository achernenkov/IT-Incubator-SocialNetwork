import {createStore, combineReducers} from 'redux'
import postReducer, {addPostDispatchType, changePostTextDispatchType, postStateType} from "./post-reducer";
import messageReducer, {addMessageDispatchType, changeMessageDispatchType, dialogsStateType} from "./dialogs-reducer";
import {FollowACType, UnFollowACType, usersReducer, UsersStateType} from "./users-reducer";

// Type ----------------------------------------------------------------------------

export type RootStateType = {
    dialogsState: dialogsStateType
    postState: postStateType
    usersState: Array<UsersStateType>
}

export type actionType = addPostDispatchType
    | changePostTextDispatchType
    | addMessageDispatchType
    | changeMessageDispatchType
    | FollowACType
    | UnFollowACType

export type dispatchType = (action: actionType) => void

// End Type -------------------------------------------------------------------------


const reducers = combineReducers({
    dialogsState: messageReducer,
    postState: postReducer,
    usersState: usersReducer
})

let store = createStore(reducers)


export default store;