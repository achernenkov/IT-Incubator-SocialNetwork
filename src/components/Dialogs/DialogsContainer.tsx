import React, {FC} from 'react';
import {creatorActionAddMessage, creatorActionChangeMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state:any) => {
    return {
        state: state.dialogsState
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        changeMessageText: (value:string) => {
            dispatch(creatorActionChangeMessageText(value))
        },
        addMessage: () => {
            dispatch(creatorActionAddMessage())
        }

    }
}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;