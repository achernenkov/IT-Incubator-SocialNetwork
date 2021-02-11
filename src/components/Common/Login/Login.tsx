import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {FormElementInput, FormElementTextArea} from "../FormElemnt/FormElement";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {connect} from "react-redux";
import {logInUserTC} from "../../../redux/auth-reducer";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = {
    login: (login: string, pass: string, remember: boolean) => void
}

const maxLength50 = maxLenghtCreator(50)

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                name='login'
                placeholder={'login'}
                component={FormElementTextArea}
                validate={[required, maxLength50]}
            /></div>
            <div><Field
                name='password'
                placeholder={'password'}
                component={FormElementTextArea}
                validate={[required, maxLength50]}
            /></div>
            <div><Field
                name='rememberMe'
                type='checkbox'
                component={FormElementInput}
            /> remember me</div>
            <div><Field
                name='requiredCheckBox'
                type='checkbox'
                component={FormElementInput}
                validate={[required]}
            /> required checkbox</div>

            <div>
                <button>Log In</button>
            </div>
        </form>
    )
}

const LoginFormRedux = reduxForm<FormDataType>({form: 'LoginForm'})(LoginForm)

const Login = (props: LoginPropsType) => {

    const submitTest = (data: FormDataType) => {
        props.login(data.login, data.password, data.rememberMe)
    }

    return (
        <div>
            <LoginFormRedux onSubmit={submitTest}/>
        </div>
    )
}

export default connect(null, {login:logInUserTC})(Login);