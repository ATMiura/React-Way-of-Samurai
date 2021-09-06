import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i <pagesCount; i++){
        pages.push(i);
    }

    return (
        <>
            <div className={s.pagination}>
                <ul className={s.pagination__list}>
                    {pages.map(p=>{
                        return <li className={`${s.pagination__item} ${props.currentPage === p && s.active}`} onClick={(e)=>{ props.onPageChanged(p) }}>{p}</li>
                    })}
                </ul>
            </div>
            <div className={s.users}>
                <div className={s.users__list}>
                    {
                        props.users.map(u => <div key={u.id} className={s.user + ' ' + s.active}>
                                <div className={s.users__avatar}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <picture className={s.users__picture}>
                                            <img src={u.photos.small != null ? u.photos.small : 'https://i.pravatar.cc/270' } alt="" className={s.users__image}/>
                                        </picture>
                                        { u.followed
                                            ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                                        }
                                    </NavLink>
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
}

export default Users;