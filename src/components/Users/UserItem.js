import React from "react";
import {NavLink} from "react-router-dom";
import s from "./User.module.css";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <>
            <div className={s.users}>
                <div className={s.users__list}>
                    {
                        props.users.map(u => <div key={u.id} className={s.user + ' ' + s.active}>
                                <div className={s.users__avatar}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <picture className={s.users__picture}>
                                            <img src={u.photos.small != null ? u.photos.small : 'https://i.pravatar.cc/270' } alt="" className={s.users__image}/>
                                        </picture>
                                    </NavLink>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => { props.unFollow(u.id) }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => { props.follow(u.id); }}>Follow</button>
                                    }
                                </div>
                                <div>
                                    <div className={s.users__fullName}>{u.name}</div>
                                    <div className={s.users__status}>{u.status}</div>
                                </div>
                                <div className={s.location}>
                                    <div className={s.location__country}>{/*{u.location.country}*/}</div>
                                    <div className={s.location__city}>{/*{u.location.city}*/}</div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
};

export default Users;