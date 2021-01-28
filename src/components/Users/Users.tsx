import React from "react";
import {UsersStateType} from "../../redux/users-reducer";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    state: UsersStateType
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    setIsLoadingFollow: (isLoadingFollow: boolean, userID: number) => void
}

const Users: React.FC<UsersPropsType> = (props) => {

    let pageCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize)
    let current = []

    for (let i = 1; i <= pageCount; i++) {
        current.push(i)
    }

    return (<div>

        {
            current.map(el => {
                return <span
                    onClick={() => {
                        props.onPageChanged(el)
                    }}
                    className={el === props.currentPage ? s.cp : ''}>| {el} |</span>
            })

        }

        {
            props.state.users.map(el => <div className={s.users} key={el.id}>
                    <div>
                        <NavLink to={'/profile/' + el.id}>
                            <img src={el.photos.small} className={s.img}/>
                        </NavLink>
                    </div>
                    <div>Name: {el.name}</div>
                    <div>Status: {el.status}</div>
                    <div>
                        <button
                            disabled={props.state.idUsersLoadingFollow.some(e => e == el.id)}
                            onClick={() => (el.followed ? props.unFollow(el.id) : props.follow(el.id))}>{el.followed ? 'UnFollowed' : 'Followed'}</button>
                    </div>
                </div>
            )
        }
    </div>)
}


export default Users