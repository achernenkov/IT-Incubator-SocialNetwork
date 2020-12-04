import {createStore, combineReducers} from 'redux'
import postReducer from "./post-reducer";
import messageReducer from "./dialogs-reducer";

const reducers = combineReducers({
    dialogsState: messageReducer,
    postState: postReducer
})


let store = createStore(reducers)


export default store;