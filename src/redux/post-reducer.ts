// Type

export type addPostDispatchType = {
    type: 'ADD-POST'
}

export type changePostTextDispatchType = {
    type: 'CHANGE-POST-TEXT'
    text: string
}

export type actionsType = addPostDispatchType | changePostTextDispatchType

//
// Post AC

export const creatorActionAddPost = (): addPostDispatchType => ({type: 'ADD-POST'})
export const creatorActionChangePostText = (text: string): changePostTextDispatchType => ({
    type: 'CHANGE-POST-TEXT',
    text: text
})

//
