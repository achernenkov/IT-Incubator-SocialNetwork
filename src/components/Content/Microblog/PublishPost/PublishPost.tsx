import React from 'react';

type publishPostType = {
    textValue: string
    changePostText: (text: string) => void
    addPost: () => void
}

const PublishPost: React.FC<publishPostType> = (props) => {

    let newPostValue = React.createRef<HTMLTextAreaElement>()

    const changeTextPublishPost = () => {
        if (newPostValue.current) {
            props.changePostText(newPostValue.current.value)
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