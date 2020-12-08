import React, {FC} from 'react';
import s from './Dialogs.module.css'
import UsersDialogs from "./UsersDialogs";
import MessageDialog from "./MessageDialog";
import {dialogsStateType} from './../../redux/state'

type DialogsType = {
    state: dialogsStateType
    addMessage: () => void
    changeMessageText: (value: string) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let newPostValue = React.createRef<HTMLTextAreaElement>()

    const changeMessageText = () => {
        if (newPostValue.current) {
            props.changeMessageText(newPostValue.current.value)
        }
    }

    const addMessage = () => {
        props.addMessage()
    }

    return (
        <section className={s.content}>
            <div className={s.dialogWrapper}>
                <div className={s.contact}>
                    {
                        props.state.dialogsUsers.map(user =>
                            <UsersDialogs name={user.name} id={user.id}/>
                        )
                    }
                </div>
                <div className={s.dialog}>
                    {
                        props.state.dialogMessage.map(message =>
                            <MessageDialog message={message.text}/>
                        )
                    }

                    <textarea ref={newPostValue} onChange={changeMessageText} value={props.state.messageText}/>
                    <br/>
                    <button onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;