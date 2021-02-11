import React, {useEffect} from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {FormElementTextArea} from "../../../Common/FormElemnt/FormElement";
import {maxLenghtCreator, required} from "../../../../utils/validators/validators";
import {authAPI} from "../../../../api/api";


type publishPostType = {
    addPost: (newPostText: string) => void
}

type PostFormDataType = {
    postFormText: string
}

const maxLength30 = maxLenghtCreator(30)

const AddPostForm = (props: InjectedFormProps<PostFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                name='postFormText'
                component={FormElementTextArea}
                placeholder='Enter text'
                validate={[required, maxLength30]}
            /></div>
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