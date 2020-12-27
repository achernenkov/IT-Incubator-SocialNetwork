import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {AuthStateType, setDataToAuthState} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import axios from "axios";

type HeaderContainerType = MSTPType & MDTPType

class HeaderContainer extends React.Component<HeaderContainerType>{

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(obj =>{
            let {id, login, email} = obj.data.data
            this.props.setDataToAuthState(id, login, email)
        })
    }

    render() {
        return(
            <Header {...this.props.state}/>
        );
    }
}

type MSTPType = {
    state: AuthStateType
}

type MDTPType = {
    setDataToAuthState: (id: number, login: string, email: string) => void
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {state: state.auth}
}


export default connect(mapStateToProps,{setDataToAuthState})(HeaderContainer)