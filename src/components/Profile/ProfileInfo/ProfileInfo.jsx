import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Preloader/>
    }
    let ContactsElements = Object.entries(profile.contacts).map(([key,value],c) => {
            if([value]!=='') return(
                <div className={s.contacts__item}>
                    <a href={`${value}`} className={s.contacts__link}>
                        {`${key}`}
                    </a>
                </div>
        )}
    );

    return (
        <>
            <div className={s.profile} id={profile.userId}>
                <div className={s.profile__info}>
                    <div className={s.profile__avatar}>
                        <picture className={s.profile__picture}>
                            <img src={profile.photos.large != null ? profile.photos.large : 'https://i.pravatar.cc/270' } alt="" className={s.profile__image}/>
                        </picture>
                    </div>
                    <div className={s.profile__description}>

                        <ProfileStatusWithHooks propStatus={status} updateStatus={updateStatus} />

                        <div className={s.profile__about}>{profile.aboutMe}</div>
                        <div className={s.profile__jobStatus}>{profile.lookingForAJobDescription}</div>
                    </div>
                </div>
                <div className={s.contacts}>
                    <h3 className={s.contacts__title}>Ищите меня тут</h3>
                    <div className={s.contacts__list}>
                        { ContactsElements }
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProfileInfo;