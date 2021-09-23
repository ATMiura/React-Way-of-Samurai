import s from "./ProfileInfo.module.css";
import React from "react";

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            { isOwner && <div className={s.profile__infoSection}><button onClick={goToEditMode}>Редактировать профиль</button></div> }

            <div className={s.profile__infoSection}>
                { profile.fullName
                    ? <div className={s.profile__fullName}>{profile.fullName}</div>
                    : ''
                }
            </div>
            <div className={s.profile__infoSection}>
                { profile.lookingForAJob
                    ?  <div className={s.profile__lookingForAJob}><b>В поиске работы: </b> {profile.lookingForAJob}</div>
                    : "No"
                }
            </div>
            <div className={s.profile__infoSection}>
                { profile.lookingForAJobDescription
                    ?  <div className={s.profile__lookingForAJob}><b>Скилы:</b> {profile.lookingForAJobDescription}</div>
                    : "No"
                }
            </div>
            <div className={s.profile__infoSection}>
                { profile.aboutMe
                    ? <div className={s.profile__about}><b>Обо мне:</b> {profile.aboutMe}</div>
                    : "Не работаю"
                }
            </div>
        </>
    )
};

export default ProfileData;