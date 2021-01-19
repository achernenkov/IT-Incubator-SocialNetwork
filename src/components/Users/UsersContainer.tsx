import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/redux-store";
import {
    follow,
    pushUsers,
    setCurrentPage, setIsLoading, setIsLoadingFollow, setTotalUsersCount,
    unFollow,
    UsersArrayType,
    UsersStateType
} from "../../redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    follow: (userID: number) => void
    state: UsersStateType
    unFollow: (userID: number) => void
    pushUsers: (users: Array<UsersArrayType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsLoading: (isLoading: boolean) => void
    setIsLoadingFollow: (isLoadingFollow:boolean, userID: number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setIsLoading(true)

        usersAPI.getUsers(this.props.state.currentPage, this.props.state.pageSize).then(data => {
            this.props.setIsLoading(false)
            this.props.pushUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    onPageChanged = (p:number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(p)

        usersAPI.getUsers(p, this.props.state.pageSize).then(data => {
            this.props.setIsLoading(false)
            this.props.pushUsers(data.items)
        })
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
    pushUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsLoading,
    setIsLoadingFollow,
})(UsersContainer)


