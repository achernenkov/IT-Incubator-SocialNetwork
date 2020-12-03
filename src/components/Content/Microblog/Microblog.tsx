import React, {FC} from 'react';
import PublishPost from './PublishPost/PublishPost'
import Post from './Post/Post'
import {actionType, postArrayType} from './../../../redux/state'

type microblogType = {
    state: Array<postArrayType>
    textValue: string
    dispatch: (action: actionType) => void
}

const Microblog: React.FC<microblogType> = (props) => {
    return (
        <div>
            My Post
            <PublishPost
                textValue={props.textValue}
                dispatch={props.dispatch}
            />
            <div>
                Посты
                {
                    props.state.map(post =>
                        <Post like={post.like} text={post.text}/>
                    )
                }
            </div>
        </div>
    )
}

export default Microblog;