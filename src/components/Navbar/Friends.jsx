import React from 'react';
import s from './Navbar.module.css';
import userStyles from '../Users/User.module.css';
import Preloader from "../Common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const Friends  = (props) => {
    if(!props.friends) {
        return <Preloader/>
    }

    let friendElements = props.friends.map(f => {
        return (
            f.followed ? <div className={s.friends__item} key={f.id}>
                <NavLink to={'/profile/' + f.id} className={userStyles.user__link}>
                    <picture className={userStyles.users__picture}>
                        <img src={f.photos.small != null ? f.profile.photos.small : 'https://i.pravatar.cc/270' } alt="" className={userStyles.users__image} />
                    </picture>
                    <div className={s.friends__name}>{f.name}</div>
                </NavLink>
            </div> : null
        )
    });

    return (
        <div className={s.friends}>
            <h3 className={s.friends__title}>Список друзей</h3>
            <div className={s.friends__list}>
                {friendElements}
            </div>
        </div>
    )
};


export default Friends;