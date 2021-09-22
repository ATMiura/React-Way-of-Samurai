import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto,}) => {
    if(!profile) {
        return <Preloader/>
    }

    let [editMode, setEditMode] = useState(false);
    const [drag, setDrag] = useState(false);

    let ContactsElements = Object.entries(profile.contacts).map(([key,value],c) => {
            if([value]!='')
                return(
                <div className={s.contacts__item}>
                    <a href={`${value}`} className={s.contacts__link}>
                        {`${key}`}
                    </a>
                </div>
        )}
    );

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0]);
        }
    };
    
    function dragStartHandler(e) {
        e.preventDefault();
        setDrag(true);
    }
    function dragLeaveHandler(e) {
        e.preventDefault();
        setDrag(false);
    }
    function onDropHandler(e) {
        e.preventDefault();
        setDrag(false);
        let files = [...e.dataTransfer.files];
        //console.log(files);

        if(files){
            savePhoto(files[0]);
        }
    }

    return (
        <>
            <div className={s.profile} id={profile.userId}>
                <div className={s.profile__info}>

                    <div className={`${s.profile__avatar} ${drag && s.dropAreaActive}`}
                         onDragOver={e => dragStartHandler(e)}
                    >
                        <picture className={s.profile__picture}>
                            <img src={profile.photos.large != null ? profile.photos.large : 'https://i.pravatar.cc/270' } alt="" className={s.profile__image}/>
                        </picture>
                        { isOwner &&
                            <label
                                className={s.profile__avatarChange__label + ' ' + s.dropArea}
                                   onDragStart={e => dragStartHandler(e)}
                                   onDragLeave={e => dragLeaveHandler(e)}
                                   onDragOver={e => dragStartHandler(e)}
                                   onDrop={e => onDropHandler(e)}
                            >
                                <input type={'file'} onChange={onMainPhotoSelected} hidden />
                            {
                                drag
                                    ? `Отпустите аватар, <br/> чтобы загрузить его`
                                    : `Перетащите аватар, чтобы загрузить его`
                            }
                        </label> }
                    </div>

                    <div className={s.profile__description}>

                        <ProfileStatusWithHooks propStatus={status} updateStatus={updateStatus} />

                        { editMode
                          ? <ProfileDataForm profile={profile} />
                          : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner} />
                        }
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

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <>
            { isOwner && <div className={s.profile__info}><button onClick={goToEditMode}>Edit Profile</button></div> }

            <div className={s.profile__info}>
                { profile.fullName
                    ? <div className={s.profile__fullName}><b>Full Name:</b> {profile.fullName}</div>
                    : ''
                }
            </div>
            <div className={s.profile__info}>
                { profile.lookingForAJob
                    ?  <div className={s.profile__lookingForAJob}><b>Looking for a job: </b> {profile.lookingForAJob}</div>
                    : "No"
                }
            </div>
            <div className={s.profile__info}>
                { profile.lookingForAJobDescription
                    ?  <div className={s.profile__lookingForAJob}><b>My prof. skills:</b> {profile.lookingForAJobDescription}</div>
                    : "No"
                }
            </div>
            <div className={s.profile__info}>
                { profile.aboutMe
                    ? <div className={s.profile__about}><b>About me:</b> {profile.aboutMe}</div>
                    : "Не работаю"
                }
            </div>
        </>
    )
};

const ProfileDataForm = ({profile}) => {
    return (
        <>
            <form>
                form
            </form>
        </>
    )
};

export default ProfileInfo;