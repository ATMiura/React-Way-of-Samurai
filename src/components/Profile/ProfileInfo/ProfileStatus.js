import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    render() {
        return(
            <>
                <div className={s.profile__status}>
                    {!this.state.editMode
                        ? <div onDoubleClick={this.activateEditMode} className={s.profile__status__item}>{this.props.status || 'Статус'}</div>
                        : <div className={s.profile__status__item}>
                            <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} className={s.profile__status__input} value={this.state.status} />
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default ProfileStatus;