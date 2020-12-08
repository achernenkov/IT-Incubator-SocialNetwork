// Type

export type dialogMessageType = {
    id: number
    text: string
}

export type dialogsUsersType = {
    id: number
    name: string
}

export type dialogsStateType = {
    dialogsUsers: Array<dialogsUsersType>
    dialogMessage: Array<dialogMessageType>
    messageText: string
}

export type addMessageDispatchType = {
    type: 'ADD-MESSAGE'
}

export type changeMessageDispatchType = {
    type: 'CHANGE-MESSAGE-TEXT'
    text: string
}

export type actionsMessageType = addMessageDispatchType | changeMessageDispatchType


//
// Message AC

export const creatorActionAddMessage = (): addMessageDispatchType => ({type: 'ADD-MESSAGE'})
export const creatorActionChangeMessageText = (messageText: string): changeMessageDispatchType => ({
    type: 'CHANGE-MESSAGE-TEXT',
    text: messageText
})

//
//InitialState

const initialState = {
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
}


//
// Reducer message

const messageReducer = (state: dialogsStateType = initialState, action: actionsMessageType): dialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                dialogMessage: [...state.dialogMessage, {id: 3, text: state.messageText}],
                messageText: ''
            }
        case "CHANGE-MESSAGE-TEXT":
            return {...state, messageText: action.text}
        default:
            return state
    }
}

export default messageReducer;