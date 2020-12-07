import React from "react";
import {connect} from "react-redux";
import Dialogs from "../Dialogs/Dialogs";
import Users from "./Users";
import {creatorActionAddMessage, creatorActionChangeMessageText, dialogsStateType} from "../../redux/dialogs-reducer";
import {dispatchType, RootStateType} from "../../redux/redux-store";
import {followAC, unFollowAC, UsersStateType} from "../../redux/users-reducer";



type MSTPType = {
    state: Array<UsersStateType>
}

type MDTPType = {
    followAC: (userID: string) => void
    unFollowAC: (userID: string) => void
}


let mapStateToProps = (state:RootStateType):MSTPType => {
    return {
        state: state.usersState
    }
}

let mapDispatchToProps = (dispatch:dispatchType):MDTPType => {
    return {
        followAC: (userID: string) => {
            dispatch(followAC(userID))
        },
        unFollowAC: (userID: string) => {
            dispatch(unFollowAC(userID))
        }

    }
}



let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer