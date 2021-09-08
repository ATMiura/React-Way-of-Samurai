import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        title: 'Hello hello my friends'
    };

    activateEditeMode = () => {
        this.setState({
            editMode: true,
        })
    };

    deactivateEditeMode = () => {
        this.setState({
            editMode: false,
        })
    };

    statusChange = (e) => {
        let inputValue = e.target.value;
        this.setState({
            title: inputValue
        })
    };

    render() {
        return(
            <>
                <div className={s.profile__status}>
                    {!this.state.editMode
                        ? <div onDoubleClick={this.activateEditeMode} className={s.profile__status__item}>{this.props.status}</div>
                        : <div className={s.profile__status__item}>
                            <input autoFocus={true} onBlur={this.deactivateEditeMode} onChange={this.statusChange} className={s.profile__status__input} value={this.props.status} />
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default ProfileStatus;