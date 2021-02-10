// Type

export type addPostDispatchType = {
    type: 'ADD-POST'
    payload: {
        textNewPost: string
    }
}

export type actionsPostType = addPostDispatchType

// Type state reducer post

export type postArrayType = {
    id: number
    text: string
    like: number
}

export type postStateType = {
    postArray: Array<postArrayType>
}

//
// Post AC

export const AddPostAC = (textNewPost: string): addPostDispatchType => ({type: "ADD-POST", payload: {textNewPost}})

//
//InitialState

const initialState = {
    postArray: [
        {id: 1, text: 'Мой первый пост через Props', like: 41},
        {id: 2, text: 'Это мой второй пост через Props', like: 21}
    ]
}

//
// Reducer post


export const postReducer = (state: postStateType = initialState, action: actionsPostType): postStateType => {
    switch (action.type) {
        case 'ADD-POST':
            return {...state, postArray: [...state.postArray, {id: 3, text: action.payload.textNewPost, like: 45}]}
        default:
            return state
    }
}

export default postReducer;