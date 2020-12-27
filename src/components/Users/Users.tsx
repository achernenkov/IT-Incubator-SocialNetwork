import React, {FormEvent} from "react";
import {UsersStateType} from "../../redux/users-reducer";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

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

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {withCredentials: true, headers:{'API-KEY':'04c8156f-4a7c-4a31-b07c-622b1f281d6f'}}).then(
                                    respons => {
                                        if(respons.data.resultCode === 0){
                                            props.unFollow(el.id)
                                        }
                                    }
                                )

                                : axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {},{withCredentials: true, headers:{'API-KEY':'04c8156f-4a7c-4a31-b07c-622b1f281d6f'}}).then(
                                    respons => {
                                        if(respons.data.resultCode === 0){
                                            props.follow(el.id)
                                        }
                                    }
                                ))


                            }>{el.followed ? 'UnFollowed' : 'Followed'}</button>
                    </div>


                </div>
            )
        }
    </div>)
}


export default Users