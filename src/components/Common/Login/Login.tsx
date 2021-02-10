import React from "react";

type LoginPropsType = {}


const LoginForm = (props: any) => {
    return(
        <form>
            <div><textarea placeholder={'login'}/></div>
            <div><textarea placeholder={'password'}/></div>
            <div><input type='checkbox'/> remember me</div>
            <div><button>Log In</button></div>
        </form>
    )
}

const Login = (props: LoginPropsType) => {
    return (
    <div>
        <LoginForm />
    </div>
    )
}

export default Login;