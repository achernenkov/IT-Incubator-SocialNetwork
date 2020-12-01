import {RenderingApp} from '../index'

const ADD_POST: string = 'ADD-POST'
const CHANGE_POST_TEXT: string = 'CHANGE-POST-TEXT'

export const creatorActionAddPost = ():addPostDispatchType => ({type:ADD_POST})
export const creatorActionChangePostText = (text:string):changePostTextDispatchType => ({type: CHANGE_POST_TEXT, text: text })


type dialogMessageType = {
    id: number
    text: string
}

type dialogsUsersType = {
    id: number
    name: string
}

export type dialogsStateType = {
    dialogMessage: Array<dialogMessageType>
    dialogsUsers: Array<dialogsUsersType>
}

export type postStateType = {
    id: number
    text: string
    like: number
}

export type stateType = {
    dialogsState: dialogsStateType
    postText: string
    postState: Array<postStateType>
}

// create an OOP object type

export type storeType = {
    _state: stateType
    _addPost: () => void
    _changePostText: (text: string) => void
    getState: () => stateType
    dispatch: (action: actionsType) => void
}

type addPostDispatchType = {
    type: ADD_POST
}

type changePostTextDispatchType = {
    type: CHANGE_POST_TEXT
    text: string
}

export type actionsType = addPostDispatchType |changePostTextDispatchType

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
            ]
        },
        postText: '',
        postState: [
            {id: 1, text: 'Мой первый пост через Props', like: 41},
            {id: 2, text: 'Это мой второй пост через Props', like: 21}
        ],
    },
    _addPost() {
        this._state.postState.push(
            {id: 3, text: this._state.postText, like: 45}
        )
        this._state.postText = ''
        RenderingApp()
    },
    _changePostText(text: string) {
        this._state.postText = text
        RenderingApp()
    },
    getState() {
        return this._state
    },
    dispatch(action: addPostDispatchType |changePostTextDispatchType) {
        if (action.type === ADD_POST) {
            this._state.postState.push(
                {id: 3, text: this._state.postText, like: 45}
            )
            this._state.postText = ''
            RenderingApp()
        } else if (action.type === CHANGE_POST_TEXT) {
            this._state.postText = action.text
            RenderingApp()
        }

    }

}


export default store;