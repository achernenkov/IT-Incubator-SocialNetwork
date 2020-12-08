import React from 'react';
import {NavLink} from "react-router-dom";

// create component users for dialogs

type UsersDialogs = {
    name: string
    id: number
}

const UsersDialogs: React.FC<UsersDialogs> = (props: UsersDialogs) => {
    return (
        <div><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}

export default UsersDialogs;