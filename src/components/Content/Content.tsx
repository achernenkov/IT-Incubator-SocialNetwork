import React, {FC} from 'react';
import Microblog from './Microblog/Microblog'
import Profile from './Profile/Profile'
import s from './Content.module.css'
import {postStateType} from './../../redux/state'

type ContentType = {
    state: Array<postStateType>
    textValue: string
    changePostText: (text: string) => void
    addPost: () => void
}


const Content: React.FC<ContentType> = (props) => {
    return (
        <section className={s.content}>
            <Profile/>
            <Microblog
                state={props.state}
                textValue={props.textValue}
                changePostText={props.changePostText}
                addPost={props.addPost}
            />
        </section>
    )
}

export default Content;