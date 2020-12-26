import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_3.png'/>
            <div className={s.auth}>
                {props.isAuth ? props.login : <NavLink to='/login'>Log in</NavLink>}
            </div>
        </header>
    )
}

export default Header;