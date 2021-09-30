import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    if(!profile) {
        return <Preloader/>
    }

    let [editMode, setEditMode] = useState(false);
    const [drag, setDrag] = useState(false);

    const ContactsElements = ({contactTitle, contactValue}) => {
        return (
            <div className={s.contacts__item}>
                <a href={contactValue} className={s.contacts__link}>
                    {contactTitle}
                </a>
            </div>
        )
    };

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

        if(files){
            savePhoto(files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false);
        })
    };

    return (
        <>
            <div className={s.profile} id={profile.userId}>
                <div className={s.profile__info}>

                    <div className={`${s.profile__avatar} ${drag && s.dropAreaActive}`} onDragOver={e => dragStartHandler(e)}
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
                          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                          : <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner} />
                        }
                    </div>
                </div>
                <div className={s.contacts}>
                    <h3 className={s.contacts__title}>Ищите меня тут</h3>
                    <div className={s.contacts__list}>
                        { Object.keys(profile.contacts).map(key => {
                            return profile.contacts[key] ? <ContactsElements key={key} contactTitle={key} contactValue={profile.contacts[key]} /> : ''
                        }) }
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProfileInfo;