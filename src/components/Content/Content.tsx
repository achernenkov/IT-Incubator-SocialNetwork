import React, {FC} from 'react';
import Microblog from './Microblog/Microblog'
import Profile from './Profile/Profile'
import s from './Content.module.css'
import {postArrayType} from './../../redux/state'
import {actionsType} from "../../redux/post-reducer";

type ContentType = {
    state: Array<postArrayType>
    textValue: string
    dispatch: (action: actionsType) => void
}


const Content: React.FC<ContentType> = (props) => {
    return (
        <section className={s.content}>
            <Profile/>
            <Microblog
                state={props.state}
                textValue={props.textValue}
                dispatch={props.dispatch}
            />
        </section>
    )
}

export default Content;