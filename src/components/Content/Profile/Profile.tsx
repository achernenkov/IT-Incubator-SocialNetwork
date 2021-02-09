import React from 'react';
import {UserProfileType} from "../../../redux/userProfile-reducer"; // ПОЗЖЕ ИСПОЛЬЗОВАТЬ ДАННЫЙ ТИП, КОГДА БУДЕТ РЕАЛИЗОВАНЫ ЗАПРОСЫ НА СЕРВЕР.
import s from './../Content.module.css'
import ProfileStatus from "./ProfileStatus/profileStatus";


type UsersProfilePropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    },
    status: string
    updateUserStatus: (newStatus: string) => void
}



const Profile = (props: UsersProfilePropsType) => {
    return (
        <div>
            {/*<img src='https://wallpaperaccess.com/full/159449.jpg' className={s.imgBG}/>*/}
            <div>
                <div><ProfileStatus
                    status={props.status}
                    updateUserStatus = {props.updateUserStatus}
                /></div>
                <img src={props.photos.large} width='200px' height='200px'/>
                <div>Полное имя: {props.fullName}</div>
                <div>Поиска работы: {props.lookingForAJobDescription}</div>
            </div>
        </div>
    )

}

export default Profile;