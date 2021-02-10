import React from 'react';
import {AddMessageAC,dialogsStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {dispatchType, RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';

type MSTPType = {
    state: dialogsStateType
    isAuth: boolean
}

type MDTPType = {
    addMessage: (newMessageText: string) => void
}


let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        state: state.dialogsState,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: dispatchType): MDTPType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(AddMessageAC(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)