import React, {FC} from 'react';
import s from './Dialogs.module.css'
import UsersDialogs from "./UsersDialogs";
import MessageDialog from "./MessageDialog";
import {dialogsStateType} from './../../redux/state'
import {actionsMessageType, creatorActionAddMessage, creatorActionChangeMessageText} from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogsState: dialogsStateType
    textValueMessage: string
    redux_message: (action: actionsMessageType) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let newPostValue = React.createRef<HTMLTextAreaElement>()

    const changeMessageText = () => {
        if (newPostValue.current) {
            props.redux_message(creatorActionChangeMessageText(newPostValue.current.value))
        }
    }

    const addMessage = () => {
        props.redux_message(creatorActionAddMessage())
    }

    return (
        <section className={s.content}>
            <div className={s.dialogWrapper}>
                <div className={s.contact}>
                    {
                        props.dialogsState.dialogsUsers.map(user =>
                            <UsersDialogs name={user.name} id={user.id}/>
                        )
                    }
                </div>
                <div className={s.dialog}>
                    {
                        props.dialogsState.dialogMessage.map(message =>
                            <MessageDialog message={message.text}/>
                        )
                    }

                    <textarea ref={newPostValue} onChange={changeMessageText} value={props.textValueMessage}/>
                    <br/>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;