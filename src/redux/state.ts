import {addPostDispatchType} from "./post-reducer"
import {addMessageDispatchType} from "./dialogs-reducer";

type dialogMessageType = {
    id: number
    text: string
}

type dialogsUsersType = {
    id: number
    name: string
}

export type dialogsStateType = {
    dialogsUsers: Array<dialogsUsersType>
    dialogMessage: Array<dialogMessageType>
    messageText: string
}

export type postArrayType = {
    id: number
    text: string
    like: number
}

export type postStateType = {
    postText: string
    postArray: Array<postArrayType>
}

export type stateType = {
    dialogsState: dialogsStateType
    postState: postStateType
}

// create an OOP object type

export type actionType =
    addPostDispatchType
    // | changePostTextDispatchType
    | addMessageDispatchType
    // | changeMessageDispatchType

export type storeType = {
    dialogsState: dialogsStateType
    postState: postStateType
}


// Create an OOP object

// let store = {
//     _state: {
//         dialogsState: {
//             dialogsUsers: [
//                 {id: 1, name: 'Dmitry'},
//                 {id: 2, name: 'Alexy'},
//                 {id: 3, name: 'Mihail'},
//                 {id: 4, name: 'Andrey'},
//                 {id: 5, name: 'Sergey'},
//                 {id: 6, name: 'Vasya'}
//             ],
//             dialogMessage: [
//                 {id: 1, text: 'Hello!'},
//                 {id: 2, text: 'How are you?'}
//             ],
//             messageText: ''
//         },
//         postState: {
//             postText: '',
//             postArray: [
//                 {id: 1, text: 'Мой первый пост через Props', like: 41},
//                 {id: 2, text: 'Это мой второй пост через Props', like: 21}
//             ]
//         }
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action: actionType) {
//         postReducer(this.getState().postState, action)
//         messageReducer(this.getState().dialogsState, action)
//         RenderingApp()
//     }
// }


// export default store;