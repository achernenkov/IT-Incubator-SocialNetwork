// Type

type addMessageDispatchType = {
    type: 'ADD-MESSAGE'
}

type changeMessageDispatchType = {
    type: 'CHANGE-MESSAGE-TEXT'
    text: string
}

export type actionsMessageType = addMessageDispatchType | changeMessageDispatchType

//
// Message AC

export const creatorActionAddMessage = (): addMessageDispatchType => ({type: 'ADD-MESSAGE'})
export const creatorActionChangeMessageText = (text: string): changeMessageDispatchType => ({
    type: 'CHANGE-MESSAGE-TEXT',
    text: text
})

//