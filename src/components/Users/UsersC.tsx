import React, {FormEvent} from "react";
import {UsersStateType} from "../../redux/users-reducer";
import s from './Users.module.css'

type UsersPropsType = {
    followAC: (userID: number) => void
    state: Array<UsersStateType>
    unFollowAC: (userID: number) => void
}

class Users extends React.Component<UsersPropsType> {
    render() {
        return (<div>
            {
                this.props.state.map(el => <div className={s.users} key={el.id}>
                        <div><img src={el.avatar} className={s.img}/></div>
                        <div>Name: {el.name}</div>
                        <div>Status: {el.status}</div>
                        <div>Location: {`${el.location.county} ${el.location.city}`}</div>
                        <div>
                            <button
                                onClick={() => (el.followed ? this.props.unFollowAC(el.id) : this.props.followAC(el.id))}>{el.followed ? 'UnFollowed' : 'Followed'}</button>
                        </div>
                    </div>
                )
            }
        </div>)
    }
}


export default Users