import React from 'react';
import {creatorActionAddPost, creatorActionChangePostText} from "../../../../redux/post-reducer";
import {actionType} from "../../../../redux/state";


type publishPostType = {
    textValue: string
    addPost: () => void
    changeTextPublishPost: (value:string) => void
}

const PublishPost: React.FC<publishPostType> = (props) => {

    let newPostValue = React.createRef<HTMLTextAreaElement>()

    const changeTextPublishPost = () => {
        if (newPostValue.current) {
           props.changeTextPublishPost(newPostValue.current.value)
        }
    }

    const addPostC = () => {
        props.addPost()
    }

    return (
        <div>
            New Post<br/>
            <textarea ref={newPostValue} onChange={changeTextPublishPost} value={props.textValue}/>
            <br/>
            <button onClick={addPostC}>Добавить пост</button>
        </div>
    )
}

export default PublishPost;