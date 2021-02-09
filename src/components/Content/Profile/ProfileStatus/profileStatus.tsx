import React from "react";

type ProfileStatusPropsType = {
    status: string
}

type ProfileStatusStateType = {
    editMode: boolean
    localStatus: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state = {
        editMode: false,
        localStatus: ''
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                localStatus: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateEditMode.bind(this)} autoFocus={true} value={this.state.localStatus}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;