import s from "../Navbar.module.css";
import React from "react";

const FriendsItem = (props) => {
    return (
        <div className={s.friends__item}>
            <picture>
                <img src={props.avatar} alt="" className={s.friends__avatar} />
            </picture>
            <div className={s.friends__name}>{props.name}</div>
        </div>
    )
};

export default FriendsItem;