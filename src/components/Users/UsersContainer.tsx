import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/redux-store";
import {
    follow, getUsers,
    setCurrentPage, setIsLoadingFollow,unFollow,
    UsersStateType
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";


type UsersPropsType = {
    follow: (userID: number) => void
    state: UsersStateType
    unFollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    setIsLoadingFollow: (isLoadingFollow:boolean, userID: number) => void
    getUsers: (currentPage:number, pageSize:number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.state.currentPage, this.props.state.pageSize)
    }

    onPageChanged = (p:number) => {
        this.props.setCurrentPage(p)
        this.props.getUsers(p, this.props.state.pageSize)
    }

    render() {
        return (
            <>
                {this.props.state.isLoading ? <Preloader /> : null}

                <Users
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    state={this.props.state}
                    pageSize={this.props.state.pageSize}
                    currentPage={this.props.state.currentPage}
                    onPageChanged={this.onPageChanged}
                    setIsLoadingFollow={this.props.setIsLoadingFollow}
                />
            </>)
    }
}


type MSTPType = {
    state: UsersStateType
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        state: state.usersState
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setIsLoadingFollow,
    getUsers
})(UsersContainer)


