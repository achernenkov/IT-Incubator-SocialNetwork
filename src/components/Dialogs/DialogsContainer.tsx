import React, {FC} from 'react';
import {creatorActionAddMessage, creatorActionChangeMessageText} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store:any
}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    const changeMessageText = (value:string) => {
            props.store.dispatch(creatorActionChangeMessageText(value))
    }

    const addMessage = () => {
        props.store.dispatch(creatorActionAddMessage())
    }

    return <Dialogs
        state={props.store.getState().dialogsState}
        addMessage={addMessage}
        changeMessageText={changeMessageText}
    />
}

export default DialogsContainer;