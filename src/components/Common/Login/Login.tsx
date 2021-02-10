import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div><Field name='login' placeholder={'login'} component='textarea'/></div>
            <div><Field name='password' placeholder={'password'} component='textarea'/></div>
            <div><Field name='rememberMe' type='checkbox' component='input'/> remember me</div>
            <div><button>Log In</button></div>
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