import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {dispatchType, RootStateType} from "../../redux/redux-store";
import {followAC, pushUsersAC, unFollowAC, UsersArrayType, UsersStateType} from "../../redux/users-reducer";
import axios from "axios";
import s from "./Users.module.css";


type UsersPropsType = {
    followAC: (userID: number) => void
    state: UsersStateType
    unFollowAC: (userID: number) => void
    pushUsers: (users: Array<UsersArrayType>) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(obj => {
            this.props.pushUsers(obj.data.items)
        })
    }

    render() {
        return (
            <Users
                followAC={this.props.followAC}
                unFollowAC={this.props.unFollowAC}
                state={this.props.state}
                pageSize={this.props.state.pageSize}
                currentPage={this.props.state.currentPage}
            />)
    }
}


type MSTPType = {
    state: UsersStateType
}

type MDTPType = {
    followAC: (userID: number) => void
    unFollowAC: (userID: number) => void
    pushUsers: (users: Array<UsersArrayType>) => void
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
        },
        pushUsers: (users: Array<UsersArrayType>) => {
            dispatch(pushUsersAC(users))
        }

    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer