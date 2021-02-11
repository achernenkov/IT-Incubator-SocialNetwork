import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {AuthStateType, getAuthUserDataTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";

type HeaderContainerType = MSTPType & MDTPType

class HeaderContainer extends React.Component<HeaderContainerType>{

    componentDidMount() {
        this.props.getAuthUserData()
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
    getAuthUserData: () => void
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {state: state.auth}
}


export default connect(mapStateToProps,{getAuthUserData: getAuthUserDataTC})(HeaderContainer)