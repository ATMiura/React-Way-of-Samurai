import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = ({propStatus, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(propStatus);

    useEffect(() => {
        setStatus(propStatus);
    }, [propStatus]);

    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    };
    const onStatusChange = (e) => setStatus(e.currentTarget.value);

    return (
        <>
            <div className={s.profile__status}>
                { !editMode &&
                    <div onDoubleClick={activateEditMode} className={s.profile__status__item}>
                        <b>{propStatus || 'Статус'}</b>
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