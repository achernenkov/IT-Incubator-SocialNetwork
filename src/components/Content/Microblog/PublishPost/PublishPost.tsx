import React from 'react';

type publishPostType = {
    textValue: string
    dispatch: (action: any) => void
}

const PublishPost: React.FC<publishPostType> = (props) => {

    let newPostValue = React.createRef<HTMLTextAreaElement>()

    const changeTextPublishPost = () => {
        if (newPostValue.current) {
            let action = {type: 'CHANGE-POST-TEXT', text: newPostValue.current.value }
            props.dispatch(action)
        }
    }

    const addPostC = () => {
            let action = {type: 'ADD-POST'}
            props.dispatch(action)
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