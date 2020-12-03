import {RenderingApp} from '../index'
import {actionsType} from "./post-reducer";
import {actionsMessageType} from "./dialogs-reducer";


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

export type storeType = {
    _state: stateType
    getState: () => stateType
    dispatch: (action: actionsType) => void
    redux_message: (action: actionsMessageType) => void
}


// Create an OOP object

let store = {
    _state: {
        dialogsState: {
            dialogsUsers: [
                {id: 1, name: 'Dmitry'},
                {id: 2, name: 'Alexy'},
                {id: 3, name: 'Mihail'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Sergey'},
                {id: 6, name: 'Vasya'}
            ],
            dialogMessage: [
                {id: 1, text: 'Hello!'},
                {id: 2, text: 'How are you?'}
            ],
            messageText: ''
        },
        postState: {
            postText: '',
            postArray: [
                {id: 1, text: 'Мой первый пост через Props', like: 41},
                {id: 2, text: 'Это мой второй пост через Props', like: 21}
            ]
        }
    },
    getState() {
        return this._state
    },
    dispatch(action: actionsType) {
        if (action.type === 'ADD-POST') {
            this._state.postState.postArray.push(
                {id: 3, text: this._state.postState.postText, like: 45}
            )
            this._state.postState.postText = ''
            RenderingApp()
        } else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.postState.postText = action.text
            RenderingApp()
        }

    },
    redux_message(action: actionsMessageType) {
        if (action.type === 'ADD-MESSAGE') {
            this._state.dialogsState.dialogMessage.push(
                {id: 3, text: this._state.dialogsState.messageText}
            )
            this._state.dialogsState.messageText = ''
            RenderingApp()
        } else if (action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.dialogsState.messageText = action.text
            RenderingApp()
        }

    }
}


export default store;