import React, {FC} from 'react';
import PublishPost from './PublishPost/PublishPost'
import Post from './Post/Post'
import {postStateType} from "../../../redux/post-reducer";

type microblogType = {
    state: postStateType
    addPost: (newPostText: string) => void
}

const Microblog: React.FC<microblogType> = (props) => {
    return (
        <div>
            My Post
            <PublishPost
                addPost={props.addPost}
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