import React, {FormEvent} from "react";
import {UsersStateType} from "../../redux/users-reducer";
import s from './Users.module.css'

type UsersPropsType = {
    followAC: (userID: number) => void
    state: UsersStateType
    unFollowAC: (userID: number) => void
    pageSize: number
    currentPage: number
    onPageChanged: (p:number) => void
}

const Users: React.FC<UsersPropsType> = (props) => {

    let current = []

    for(let i = 1; i <= props.pageSize; i++){
        current.push(i)
    }


    return (<div>

        {
            current.map(el => {
                return <span
                    onClick={()=>{props.onPageChanged(el)}}
                    className={el === props.currentPage ? s.cp: ''}>{el}</span>
            })

        }

        {
            props.state.users.map(el => <div className={s.users} key={el.id}>
                    <div><img src={el.photos.small} className={s.img}/></div>
                    <div>Name: {el.name}</div>
                    <div>Status: {el.status}</div>
                    <div>
                        <button
                            onClick={() => (el.followed ? props.unFollowAC(el.id) : props.followAC(el.id))}>{el.followed ? 'UnFollowed' : 'Followed'}</button>
                    </div>


                </div>
            )
        }
    </div>)
}


export default Users