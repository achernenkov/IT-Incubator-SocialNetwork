import React, {FC} from 'react';
import Profile from './Profile/Profile'
import s from './Content.module.css'
import MicroblogContainer from "./Microblog/MicroblogContainer";


const Content: React.FC = () => {
    return (
        <section className={s.content}>
            <Profile/>
            <MicroblogContainer/>
        </section>
    )
}

export default Content;