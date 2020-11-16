import React, {FC} from 'react';
import s from './Dialogs.module.css'
import UsersDialogs from "./UsersDialogs";
import MessageDialog from "./MessageDialog";
import {dialogsStateType} from './../../redux/state'

type DialogsType = {
    dialogsState: dialogsStateType
}

const Dialogs: React.FC<DialogsType> = (props) => {
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
                </div>
            </div>
        </section>
    )
}

export default Dialogs;