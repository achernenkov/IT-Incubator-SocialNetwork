import React from 'react';
import s from './Dialogs.module.css'
import UsersDialogs from "./UsersDialogs";
import MessageDialog from "./MessageDialog";
import {dialogsStateType} from './../../redux/state'
import {Field, Form, InjectedFormProps, reduxForm} from 'redux-form'
import {maxLenghtCreator, required} from "../../utils/validators/validators";
import {FormElementTextArea} from "../Common/FormElemnt/FormElement";

type DialogsType = {
    state: dialogsStateType
    addMessage: (newMessageText: string) => void
    isAuth: boolean
}

export type MessageFormDataType = {
    messageText: string
}

const maxLength15 = maxLenghtCreator(15)

const MessageTextForm = (props: InjectedFormProps<MessageFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={FormElementTextArea}
                        placeholder='Enter you message'
                        name='messageText'
                        validate={[required, maxLength15]}
            /></div>
            <button>Send Message</button>
        </form>
    )
}

const MessageTextFormRedux = reduxForm<MessageFormDataType>({form: 'addMessageForm'})(MessageTextForm)

const Dialogs: React.FC<DialogsType> = (props) => {


    const addMessage = (data: MessageFormDataType) => {
        props.addMessage(data.messageText)
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

                    <MessageTextFormRedux onSubmit={addMessage}/>
                </div>
            </div>
        </section>
    )
}

export default Dialogs;