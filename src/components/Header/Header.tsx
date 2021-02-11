import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logOutUserTC} from "../../redux/auth-reducer";

type HeaderPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    logOut: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png'/>
            <div className={s.auth}>
                {props.isAuth ? <div>{props.login} <button onClick={()=> {props.logOut()}}>Log Out</button></div>  : <NavLink to='/login'>Log in</NavLink>}
            </div>
        </header>
    )
}

export default connect(null, {logOut: logOutUserTC})(Header);