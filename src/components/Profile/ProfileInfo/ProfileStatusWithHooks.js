import React, {useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e) => setStatus(e.currentTarget.value);

    return (
        <>
            <div className={s.profile__status}>
                { !editMode &&
                    <div onDoubleClick={activateEditMode} className={s.profile__status__item}>
                        {props.status || 'Статус'}
                    </div>
                }

                { editMode &&
                    <div className={s.profile__status__item}>
                        <input className={s.profile__status__input}
                               autoFocus={true}
                               onBlur={deactivateEditMode}
                               onChange={onStatusChange}
                               value={status}/>
                    </div>
                }
            </div>
        </>
    )
};

export default ProfileStatusWithHooks;