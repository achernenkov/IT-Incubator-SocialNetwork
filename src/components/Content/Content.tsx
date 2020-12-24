import React, {FC} from 'react';
import Profile from './Profile/Profile'
import s from './Content.module.css'
import MicroblogContainer from "./Microblog/MicroblogContainer";
import axios from "axios";


type ContentContainerType = {

}

class ContentContainer extends React.Component<ContentContainerType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then(obj => {
            console.log(obj)
        })
    }

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