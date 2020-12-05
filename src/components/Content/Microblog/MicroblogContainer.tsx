import React, {FC} from 'react';
import Microblog from "./Microblog";
import {creatorActionAddPost, creatorActionChangePostText} from "../../../redux/post-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

let mapStateToProps = (state:RootStateType) => {
    return {
        state: state.postState
    }
}

let mapDispatchToProps = (dispatch:any) => {
    return {
        changeTextPublishPost: (value:string) => {
            dispatch(creatorActionChangePostText(value))
        },
        addPost: () => {
            dispatch(creatorActionAddPost())
        }

    }
}

let MicroblogContainer = connect(mapStateToProps,mapDispatchToProps)(Microblog)


export default MicroblogContainer;