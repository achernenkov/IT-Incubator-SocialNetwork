import React, {FC} from 'react';
import Microblog from "./Microblog";
import {AddPostAC,postStateType} from "../../../redux/post-reducer";
import {connect} from "react-redux";
import {dispatchType, RootStateType} from "../../../redux/redux-store";


type MSTPType = {
    state: postStateType
}

type MDTPType = {
    addPost: (newPostText: string) => void
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        state: state.postState
    }
}

let mapDispatchToProps = (dispatch: dispatchType): MDTPType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(AddPostAC(newPostText))
        }

    }
}

let MicroblogContainer = connect(mapStateToProps, mapDispatchToProps)(Microblog)


export default MicroblogContainer;