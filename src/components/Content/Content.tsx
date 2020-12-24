import React from 'react';
import Profile from './Profile/Profile'
import s from './Content.module.css'
import MicroblogContainer from "./Microblog/MicroblogContainer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {SetDataUserProfil, UserProfileType} from "../../redux/userProfile-reducer";
import Preloader from "../Common/Preloader/Preloader";


type ContentContainerType = {
    state: UserProfileType
    SetDataUserProfil: (UserProfile: UserProfileType) => void
}

class ContentContainer extends React.Component<ContentContainerType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/2`).then(obj => {
            this.props.SetDataUserProfil(obj.data)
        })
    }

    render() {

        if(Object.keys(this.props.state).length === 0){
            return (<Preloader />)
        }

        return (
            <section className={s.content}>
                <Profile
                    {...this.props.state}
                />
                <MicroblogContainer/>
            </section>
        )
    }

}

type MSTPType = {
    state: UserProfileType
}


let mapStateToProps = (state:RootStateType): MSTPType => {
    return {state: state.userProfileState}
}


export default connect(mapStateToProps, {SetDataUserProfil})(ContentContainer)