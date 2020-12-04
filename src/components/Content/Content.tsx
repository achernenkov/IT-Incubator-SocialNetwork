import React, {FC} from 'react';
import Profile from './Profile/Profile'
import s from './Content.module.css'
import MicroblogContainer from "./Microblog/MicroblogContainer";

type ContentType = {
    store:any
}


const Content: React.FC<ContentType> = (props) => {
    return (
        <section className={s.content}>
            <Profile/>
            <MicroblogContainer
                store={props.store}
            />
        </section>
    )
}

export default Content;