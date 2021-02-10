import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'
import {FormElement, FormElementInput} from "../FormElemnt/FormElement";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLenghtCreator(10)

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field
                name='login'
                placeholder={'login'}
                component={FormElement}
                validate={[required, maxLength10]}
            /></div>
            <div><Field
                name='password'
                placeholder={'password'}
                component={FormElement}
                validate={[required, maxLength10]}
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

const Login = () => {

    const submitTest = (data: FormDataType) => {
        console.log(data)
    }

    return (
        <div>
            <LoginFormRedux onSubmit={submitTest}/>
        </div>
    )
}

export default Login;