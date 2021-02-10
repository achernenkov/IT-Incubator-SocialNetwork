import React from 'react';
import Profile from './Profile/Profile'
import s from './Content.module.css'
import MicroblogContainer from "./Microblog/MicroblogContainer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {setUsersDataTC, setUserStatusTC, updateUserStatusTC, UserProfileType} from "../../redux/userProfile-reducer";
import Preloader from "../Common/Preloader/Preloader";
import { withRouter ,RouteComponentProps } from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux'

type PathParamsType = {
    userID: string | undefined
}

type ContentContainerConnectType = {
    state: UserProfileType
    isAuth: boolean
    setUsersData: (userID: string) => void
    setUserStatus: (userID: string) => void
    updateUserStatus: (newStatus: string) => void
}

type ContentContainerType = ContentContainerConnectType & RouteComponentProps<PathParamsType>

class ContentContainer extends React.Component<ContentContainerType>{
    componentDidMount() {
        let userID = this.props.match.params.userID
        if(!userID){
            userID = '13064'
        }
        this.props.setUsersData(userID)
        setTimeout(()=> this.props.setUserStatus('13064'), 1000)
    }

    render() {

        if(Object.keys(this.props.state).length === 0){
            return (<Preloader />)
        }

        return (
            <section className={s.content}>
                <Profile
                    {...this.props.state}
                    updateUserStatus = {this.props.updateUserStatus}
                />
                <MicroblogContainer/>
            </section>
        )
    }

}

type MSTPType = {
    state: UserProfileType
    isAuth: boolean
}


let mapStateToProps = (state:RootStateType): MSTPType => {
    return {
        state: state.userProfileState,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUsersData: setUsersDataTC,
        setUserStatus:setUserStatusTC,
        updateUserStatus:updateUserStatusTC
    }),
    withRouter,
    withAuthRedirect
)(ContentContainer)