import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../Common/FormControls/FormControls";
import {reduxForm} from "redux-form";
import style from "../../Common/FormControls/FormControls.module.css";

const ProfileDataForm = ({handleSubmit, error, profile}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className={s.profile__infoSection}>
                    <button>Сохранить изменения</button>
                </div>

                { error && <div className={style.formSummaryError}>{ error }</div> }

                <div className={s.profile__infoSection}>
                    <b className={s.profile__infoLabel}>Имя:</b>
                    <div className={s.profile__infoField}>
                        {createField("Имя", "fullName", [], Input,)}
                    </div>
                </div>
                <div className={s.profile__infoSection}>
                    <b className={s.profile__infoLabel}>В поиске работы:</b>
                    <div className={s.profile__infoField}>
                        {createField("В поиске работы", "lookingForAJob", [], Input,{type: "checkbox"})}
                    </div>
                </div>
                <div className={s.profile__infoSection}>
                    <b className={s.profile__infoLabel}>Скилы:</b>
                    <div className={s.profile__infoField}>
                        {createField("Скилы", "lookingForAJobDescription", [], Textarea,)}
                    </div>
                </div>
                <div className={s.profile__infoSection}>
                    <b className={s.profile__infoLabel}>Обо мне:</b>
                    <div className={s.profile__infoField}>
                        {createField("Обо мне", "aboutMe", [], Textarea,)}
                    </div>
                </div>
                <div className={s.profile__infoSection}>
                    <b className={s.profile__infoLabel}>Контакты:</b>
                    <div className={s.profile__contactsList}>
                        {Object.keys(profile.contacts).map(key => {
                            return <div key={key} className={s.contacts__item}>
                                <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                            </div>
                        })}
                    </div>
                </div>
            </form>
        </>
    )
};
const ProfileDataFormRedux = reduxForm({
    form: 'editProfile'
})(ProfileDataForm);

export default ProfileDataFormRedux;