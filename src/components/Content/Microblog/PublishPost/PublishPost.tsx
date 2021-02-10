import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'


type publishPostType = {
    addPost: (newPostText: string) => void
}

type PostFormDataType = {
    postFormText: string
}

const AddPostForm = (props: InjectedFormProps<PostFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name='postFormText' component='textarea' placeholder='Enter text'/></div>
            <div><button>AddPost</button></div>
        </form>
    )
}


const AddPostFormRedux = reduxForm<PostFormDataType>({form: 'addPostForm'})(AddPostForm)

const PublishPost: React.FC<publishPostType> = (props) => {


    const addPostC = (data: PostFormDataType) => {
        props.addPost(data.postFormText)
    }

    return (
        <div>
            New Post<br/>
            <AddPostFormRedux onSubmit={addPostC}/>
        </div>
    )
}

export default PublishPost;