import React from "react";
import {NavLink} from "react-router-dom";
import s from "../User.module.css";

const UserItem = (props) => {
    let path = "/users/" + props.id;

    return (
        <div className={s.user + ' ' + s.active}>
            <div className={s.users__avatar}>
                <picture className={s.users__picture}>
                    <img src={props.avatar} alt="" className={s.users__image}/>
                </picture>
                <div className={s.users__follow}>{props.followed}</div>
            </div>
            <NavLink to={path} className={s.user__link}>{props.fullName}</NavLink>
        </div>
    )
};

export default UserItem;