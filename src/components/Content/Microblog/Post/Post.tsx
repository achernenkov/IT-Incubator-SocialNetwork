import React from 'react';

type PropsType = {
    text: string
    like: number
}


const Post = (props: PropsType) => {
    return (
        <div>
            <span>{props.text}</span><br/>
            <span>♡{props.like}</span>
        </div>
    )
}

export default Post;