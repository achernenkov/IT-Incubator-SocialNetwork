import React, {FC} from 'react';
import Microblog from "./Microblog";
import {creatorActionAddPost, creatorActionChangePostText} from "../../../redux/post-reducer";

type MicroblogContainerType = {
    store: any
}

const MicroblogContainer: React.FC<MicroblogContainerType> = (props) => {

    const changeTextPublishPost = (value: string) => {
        debugger
        props.store.dispatch(creatorActionChangePostText(value))
    }

    const addPost = () => {
        props.store.dispatch(creatorActionAddPost())
    }

    return <Microblog
        state={props.store.getState().postState}
        addPost={addPost}
        changeTextPublishPost={changeTextPublishPost}
    />
}

export default MicroblogContainer;