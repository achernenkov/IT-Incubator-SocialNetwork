import React, {FC} from 'react';
import PublishPost from './PublishPost/PublishPost'
import Post from './Post/Post'
import {actionType} from './../../../redux/state'
import {postStateType} from "../../../redux/post-reducer";

type microblogType = {
    state: postStateType
    addPost: () => void
    changeTextPublishPost: (value: string) => void
}

const Microblog: React.FC<microblogType> = (props) => {
    return (
        <div>
            My Post
            <PublishPost
                textValue={props.state.postText}
                addPost={props.addPost}
                changeTextPublishPost={props.changeTextPublishPost}
            />
            <div>
                Посты
                {
                    props.state.postArray.map(post =>
                        <Post like={post.like} text={post.text}/>
                    )
                }
            </div>
        </div>
    )
}

export default Microblog;