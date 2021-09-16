import React from "react";
import {NavLink} from "react-router-dom";
import s from "../User.module.css";

const UserItem = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <>
            <div className={s.user + ' ' + s.active}>
                <div className={s.users__avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <picture className={s.users__picture}>
                            <img src={user.photos.small != null ? user.photos.small : 'https://i.pravatar.cc/270' } alt="" className={s.users__image}/>
                        </picture>
                    </NavLink>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id=>id===user.id)} onClick={() => { unFollow(user.id) }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id=>id===user.id)} onClick={() => { follow(user.id); }}>Follow</button>
                    }
                </div>
                <div>
                    <div className={s.users__fullName}>{user.name}</div>
                    <div className={s.users__status}>{user.status}</div>
                </div>
                <div className={s.location}>
                    <div className={s.location__country}>user.location.country</div>
                    <div className={s.location__city}>user.location.city</div>
                </div>
            </div>
        </>
    )
};

export default UserItem;