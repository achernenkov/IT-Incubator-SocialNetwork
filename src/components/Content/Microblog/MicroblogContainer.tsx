import React, {FC} from 'react';
import Microblog from "./Microblog";
import {creatorActionAddPost, creatorActionChangePostText, postStateType} from "../../../redux/post-reducer";
import {connect} from "react-redux";
import {dispatchType, RootStateType} from "../../../redux/redux-store";


type MSTPType = {
    state: postStateType
}

type MDTPType = {
    changeTextPublishPost: (value: string) => void
    addPost: () => void
}

let mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        state: state.postState
    }
}

let mapDispatchToProps = (dispatch: dispatchType): MDTPType => {
    return {
        changeTextPublishPost: (value: string) => {
            dispatch(creatorActionChangePostText(value))
        },
        addPost: () => {
            dispatch(creatorActionAddPost())
        }

    }
}

let MicroblogContainer = connect(mapStateToProps, mapDispatchToProps)(Microblog)


export default MicroblogContainer;