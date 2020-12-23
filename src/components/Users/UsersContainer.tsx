import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {dispatchType, RootStateType} from "../../redux/redux-store";
import {followAC, unFollowAC, UsersStateType} from "../../redux/users-reducer";
import axios from "axios";
import s from "./Users.module.css";

axios.get('https://social-network.samuraijs.com/api/1.0/users').then(obj => {
    debugger
    console.log(obj.data.items)
})

type UsersPropsType = {
    followAC: (userID: number) => void
    state: Array<UsersStateType>
    unFollowAC: (userID: number) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType> {
    render() {
        return (
            <Users
                followAC={this.props.followAC}
                unFollowAC={this.props.unFollowAC}
                state={this.props.state}
            />)
    }
}


type MSTPType = {
    state: Array<UsersStateType>
}

type MDTPType = {
    followAC: (userID: number) => void
    unFollowAC: (userID: number) => void
}


let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        state: state.usersState
    }
}

let mapDispatchToProps = (dispatch: dispatchType): MDTPType => {
    return {
        followAC: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollowAC: (userID: number) => {
            dispatch(unFollowAC(userID))
        }

    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer