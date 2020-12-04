import React, {FC} from 'react';
import Microblog from './Microblog/Microblog'
import Profile from './Profile/Profile'
import s from './Content.module.css'
import {actionType, postArrayType} from './../../redux/state'

type ContentType = {
    contentState: Array<postArrayType>
    textValue: string
    dispatch: (action: actionType) => void
}


const Content: React.FC<ContentType> = (props) => {
    return (
        <section className={s.content}>
            <Profile/>
            <Microblog
                microblogState={props.contentState}
                textValue={props.textValue}
                dispatch={props.dispatch}
            />
        </section>
    )
}

export default Content;