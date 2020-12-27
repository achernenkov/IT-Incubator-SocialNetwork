import React from "react";
import {UsersStateType} from "../../redux/users-reducer";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    follow: (userID: number) => void
    state: UsersStateType
    unFollow: (userID: number) => void
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
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
                            onClick={() => (el.followed ?

                                usersAPI.unFollow(el.id).then(resultCode => {if(resultCode === 0){props.unFollow(el.id)}})

                                :

                                usersAPI.follow(el.id).then(resultCode => {if(resultCode === 0){props.follow(el.id)}}))

                            }>{el.followed ? 'UnFollowed' : 'Followed'}</button>
                    </div>


                </div>
            )
        }
    </div>)
}


export default Users