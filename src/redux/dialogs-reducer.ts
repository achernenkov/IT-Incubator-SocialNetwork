// Type

export type addMessageDispatchType = {
    type: 'ADD-MESSAGE'
}

export type changeMessageDispatchType = {
    type: 'CHANGE-MESSAGE-TEXT'
    text: string
}

export type actionsMessageType = addMessageDispatchType | changeMessageDispatchType


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

//
// Message AC

export const creatorActionAddMessage = (): addMessageDispatchType => ({type: 'ADD-MESSAGE'})
export const creatorActionChangeMessageText = (messageText: string): changeMessageDispatchType => ({
    type: 'CHANGE-MESSAGE-TEXT',
    text: messageText
})

//
// Reducer message

const messageReducer = (state:dialogsStateType, action:actionsMessageType): dialogsStateType => {
    switch (action.type){
        case "ADD-MESSAGE":
            state.dialogMessage.push(
                {id: 3, text: state.messageText}
            )
            state.messageText = ''
            return state
        case "CHANGE-MESSAGE-TEXT":
            state.messageText = action.text
            return state
        default:
            return state
    }
}

export default messageReducer;