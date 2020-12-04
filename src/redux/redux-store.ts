import {createStore, combineReducers} from 'redux'
import postReducer from "./post-reducer";

const reducers = combineReducers({
    postReducer: postReducer

})
let store = createStore(reducers)