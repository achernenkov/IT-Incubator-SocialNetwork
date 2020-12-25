import React from 'react';
import {UserProfileType} from "../../../redux/userProfile-reducer";
import s from './../Content.module.css'



const Profile = (props: UserProfileType) => {
    return (
        <div>
            <img src='https://wallpaperaccess.com/full/159449.jpg' className={s.imgBG}/>
            <div>
                <img src={props.photos.large} width='200px' height='200px'/>
                <div>Полное имя: {props.fullName}</div>
                <div>Поиска работы: {props.lookingForAJobDescription}</div>
            </div>
        </div>
    )

}

export default Profile;