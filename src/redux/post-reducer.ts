// Type

export type addPostDispatchType = {
    type: 'ADD-POST'
}

export type changePostTextDispatchType = {
    type: 'CHANGE-POST-TEXT'
    text: string
}

export type actionsPostType = addPostDispatchType | changePostTextDispatchType

// Type state reducer post

export type postArrayType = {
    id: number
    text: string
    like: number
}

export type postStateType = {
    postText: string
    postArray: Array<postArrayType>
}

//
// Post AC

export const creatorActionAddPost = (): addPostDispatchType => ({type: "ADD-POST"})
export const creatorActionChangePostText = (PostText: string): changePostTextDispatchType => ({
    type: 'CHANGE-POST-TEXT',
    text: PostText
})

//
// Reducer post

const postReducer = (state:postStateType, action:actionsPostType):postStateType => {
    switch (action.type){
        case 'ADD-POST':
            state.postArray.push(
                {id: 3, text: state.postText, like: 45}
            )
            state.postText = ''
            return state
        case 'CHANGE-POST-TEXT':
            state.postText = action.text
            return state
        default:
            return state
    }
}

export default postReducer;