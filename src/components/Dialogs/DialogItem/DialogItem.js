import React from "react";
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.dialogs__avatar}>
                <picture className={s.dialogs__picture}>
                    <img src={props.avatar} alt="" className={s.dialogs__image}/>
                </picture>
            </div>
            <NavLink to={path} className={s.dialog__link}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;