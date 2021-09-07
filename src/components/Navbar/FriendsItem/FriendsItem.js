import s from "../Navbar.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {
    return (
        <div className={s.friends__item}>
            <NavLink to={'/profile/' + props.id}>
                <picture>
                    <img src={props.photos.small != null ? props.profile.photos.large : 'https://i.pravatar.cc/270' } alt="" className={s.friends__avatar} />
                </picture>
                <div className={s.friends__name}>{props.name}</div>
            </NavLink>
        </div>
    )
};

export default FriendsItem;