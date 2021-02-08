import React from "react";

type ProfileStatusPropsType = {
    status: string
    setNewStatus:(newStatus:string) => void
}

type ProfileStatusStateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {

    state = {
        editMode: false
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode(event: string){

        this.props.setNewStatus(event)

        this.setState({
            editMode: false
        })
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
                    <input onBlur={(event) => this.deactivateEditMode('Новый текст')} autoFocus={true} value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;