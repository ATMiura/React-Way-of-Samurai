import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import Post from "../MyPosts/Post/Post";


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    let ContactsElements = Object.entries(props.profile.contacts).map(([key,value],c) =>
        {
            if([value]!='') return(
                <div className={s.contacts__item}>
                    <a href={`${key}`} className={s.contacts__link}>
                        {`${value}`}
                    </a>
                </div>
        )}
    );

    return (
        <>
            <div className={s.profile} id={props.profile.userId}>
                <div className={s.profile__info}>
                    <div className={s.profile__avatar}>
                        <picture className={s.profile__picture}>
                            <img src={props.profile.photos.large != null ? props.profile.photos.large : 'https://i.pravatar.cc/270' } alt="" className={s.profile__image}/>
                        </picture>
                    </div>
                    <div className={s.profile__description}>
                        <div className={s.profile__about}>{props.profile.aboutMe}</div>
                        <div className={s.profile__jobStatus}>{props.profile.lookingForAJobDescription}</div>
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