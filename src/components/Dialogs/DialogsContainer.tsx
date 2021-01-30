import React from 'react';
import {creatorActionAddMessage, creatorActionChangeMessageText, dialogsStateType} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {dispatchType, RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MSTPType = {
    state: dialogsStateType
    isAuth: boolean
}

type MDTPType = {
    changeMessageText: (value: string) => void
    addMessage: () => void
}


let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        state: state.dialogsState,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: dispatchType): MDTPType => {
    return {
        changeMessageText: (value: string) => {
            dispatch(creatorActionChangeMessageText(value))
        },
        addMessage: () => {
            dispatch(creatorActionAddMessage())
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs))

export default DialogsContainer;