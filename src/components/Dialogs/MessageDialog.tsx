import React from 'react';

type MessageDialog = {
    message: string
}

// create component message for dialog
const MessageDialog: React.FC<MessageDialog> = (props) => {
    return <div> {props.message} </div>
}

export default MessageDialog;