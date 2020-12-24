import React from 'react';
import {UserProfileType} from "../../../redux/userProfile-reducer";



const Profile = (props: UserProfileType) => {
    return (
        <div>
            <img src='https://wallpaperaccess.com/full/159449.jpg'/>
            <div>
                {props.fullName}
                аватар + описание
            </div>
        </div>
    )

}

export default Profile;