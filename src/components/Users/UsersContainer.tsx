import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {dispatchType, RootStateType} from "../../redux/redux-store";
import {
    followAC,
    pushUsersAC,
    setCurrentPageAC, setIsLoadingAC, setTotalUsersCountAC,
    unFollowAC,
    UsersArrayType,
    UsersStateType
} from "../../redux/users-reducer";
import axios from "axios";
import Preloader from "../Common/Preloader/Preloader";


type UsersPropsType = {
    followAC: (userID: number) => void
    state: UsersStateType
    unFollowAC: (userID: number) => void
    pushUsers: (users: Array<UsersArrayType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsLoading: (isLoading: boolean) => void
}

class UsersAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`).then(obj => {
            this.props.setIsLoading(false)
            this.props.pushUsers(obj.data.items)
            this.props.setTotalUsersCount(obj.data.totalCount)
        })
    }

    onPageChanged = (p:number) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.state.pageSize}`).then(obj => {
            this.props.setIsLoading(false)
            this.props.pushUsers(obj.data.items)
        })
    }

    render() {
        return (
            <>
                {this.props.state.isLoading ? <Preloader /> : null}

                <Users
                    followAC={this.props.followAC}
                    unFollowAC={this.props.unFollowAC}
                    state={this.props.state}
                    pageSize={this.props.state.pageSize}
                    currentPage={this.props.state.currentPage}
                    onPageChanged={this.onPageChanged}
                />
            </>)
    }
}


type MSTPType = {
    state: UsersStateType
}

type MDTPType = {
    followAC: (userID: number) => void
    unFollowAC: (userID: number) => void
    pushUsers: (users: Array<UsersArrayType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsLoading: (isLoading: boolean) => void
}


let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        state: state.usersState
    }
}

let mapDispatchToProps = (dispatch: dispatchType): MDTPType => {
    return {
        followAC: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollowAC: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        pushUsers: (users: Array<UsersArrayType>) => {
            dispatch(pushUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) =>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setIsLoading: (isLoading: boolean) => {
            dispatch(setIsLoadingAC(isLoading))
        }

    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)

export default UsersContainer