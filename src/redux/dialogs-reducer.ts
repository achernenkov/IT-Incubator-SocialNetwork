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
}

export type addMessageDispatchType = {
    type: 'ADD-MESSAGE'
    payload:{
        newMessageText: string
    }
}

export type actionsMessageType = addMessageDispatchType


//
// Message AC

export const AddMessageAC = (newMessageText: string): addMessageDispatchType => ({type: 'ADD-MESSAGE', payload:{newMessageText}})

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
    ]
}


//
// Reducer message

const messageReducer = (state: dialogsStateType = initialState, action: actionsMessageType): dialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                dialogMessage: [...state.dialogMessage, {id: 3, text: action.payload.newMessageText}],
            }
        default:
            return state
    }
}

export default messageReducer;