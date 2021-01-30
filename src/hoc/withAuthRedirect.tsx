import React from 'react'
import {Redirect} from 'react-router'


type MSTPFRType = {
    isAuth: boolean
}


export function withAuthRedirect <P> (Component: React.ComponentType<P>) {

     const RedirectComponent = (props:MSTPFRType & P) => {

        if(!props.isAuth) return <Redirect to='login' />

        return <Component {...props}/>

    }

    return RedirectComponent

}