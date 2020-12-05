import React, {FC} from 'react';
import Microblog from "./Microblog";
import {creatorActionAddPost, creatorActionChangePostText} from "../../../redux/post-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state:any) => {
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