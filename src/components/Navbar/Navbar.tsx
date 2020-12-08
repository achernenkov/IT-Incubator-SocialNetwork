import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users'>Users</NavLink>
            </div>
            <div>
                <NavLink to='p'>Music</NavLink>
            </div>
            <div>
                <NavLink to='p'>Setting</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;