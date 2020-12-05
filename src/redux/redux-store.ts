import {createStore, combineReducers} from 'redux'
import postReducer, {addPostDispatchType, changePostTextDispatchType, postStateType} from "./post-reducer";
import messageReducer, {addMessageDispatchType, changeMessageDispatchType, dialogsStateType} from "./dialogs-reducer";

// Type ----------------------------------------------------------------------------

export type RootStateType = {
    dialogsState:dialogsStateType
    postState:postStateType
}

export type actionType = addPostDispatchType
    | changePostTextDispatchType
    | addMessageDispatchType
    | changeMessageDispatchType

export type dispatchType = (action: actionType) => void

// End Type -------------------------------------------------------------------------



const reducers = combineReducers({
    dialogsState: messageReducer,
    postState: postReducer
})

let store = createStore(reducers)


export default store;