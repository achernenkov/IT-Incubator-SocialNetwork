import React from 'react';
import Profile from './Profile/Profile'
import s from './Content.module.css'
import MicroblogContainer from "./Microblog/MicroblogContainer";
import axios from "axios";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {SetDataUserProfil, UserProfileType} from "../../redux/userProfile-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { withRouter, RouteComponentProps } from "react-router";

type PathParamsType = {
    userID: string | undefined
}

type ContentContainerConnectType = {
    state: UserProfileType
    SetDataUserProfil: (UserProfile: UserProfileType) => void
}

type ContentContainerType = ContentContainerConnectType & RouteComponentProps<PathParamsType>

class ContentContainer extends React.Component<ContentContainerType>{
    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID){
            userID = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userID).then(obj => {
            this.props.SetDataUserProfil(obj.data)
        })
    }

    render() {
        debugger
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

let WithUrlDataContentContainerComponent = withRouter(ContentContainer)

export default connect(mapStateToProps, {SetDataUserProfil})(WithUrlDataContentContainerComponent)