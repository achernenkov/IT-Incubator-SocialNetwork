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
//InitialState

const initialState = {
        postText: '',
        postArray: [
        {id: 1, text: 'Мой первый пост через Props', like: 41},
        {id: 2, text: 'Это мой второй пост через Props', like: 21}
    ]
}

//
// Reducer post


export const postReducer = (state:postStateType = initialState, action:actionsPostType):postStateType => {
    let newState = {...state}
    newState.postArray = [...state.postArray]
    switch (action.type){
        case 'ADD-POST':

            newState.postArray.push(
                {id: 3, text: state.postText, like: 45}
            )
            newState.postText = ''
            return newState
        case 'CHANGE-POST-TEXT':
            newState.postText = action.text
            return newState
        default:
            return state
    }
}

export default postReducer;