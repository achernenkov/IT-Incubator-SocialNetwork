import React, {FC} from 'react';
import Profile from './Profile/Profile'
import s from './Content.module.css'
import MicroblogContainer from "./Microblog/MicroblogContainer";


type ContentContainerType = {

}

class ContentContainer extends React.Component<ContentContainerType>{

    render() {
        return (
            <section className={s.content}>
                <Profile/>
                <MicroblogContainer/>
            </section>
        )
    }

}


export default ContentContainer;