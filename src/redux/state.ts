import {RenderingApp} from '../index'

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
    state: stateType
    addPost: () => void
    changePostText: (text: string) => void
}

// Create an OOP object

let store = {
    state: {
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
    addPost() {
        this.state.postState.push(
            {id: 3, text: this.state.postText , like: 45}
        )
        this.state.postText = ''
        RenderingApp()
    },
    changePostText(text: string) {
        this.state.postText = text
        RenderingApp()
    }

}


export default store;