import React from 'react';
import {actionsType, creatorActionAddPost, creatorActionChangePostText} from "../../../../redux/post-reducer";


type publishPostType = {
    textValue: string
    dispatch: (action: actionsType) => void
}

const PublishPost: React.FC<publishPostType> = (props) => {

    let newPostValue = React.createRef<HTMLTextAreaElement>()

    const changeTextPublishPost = () => {
        if (newPostValue.current) {
            props.dispatch(creatorActionChangePostText(newPostValue.current.value))
        }
    }

    const addPostC = () => {
        props.dispatch(creatorActionAddPost())
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