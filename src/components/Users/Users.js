import React from 'react';
import s from './User.module.css';
import * as axios from "axios";

const Users = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    };


    return (
        <div className={s.users}>
            <div className={s.usersItems}>
                <button onClick={getUsers}>Get Users</button>
                {
                    props.users.map(u => <div key={u.id} className={s.user + ' ' + s.active}>
                            <div className={s.users__avatar}>
                                <picture className={s.users__picture}>
                                    <img src={u.photos.small != null ? u.photos.small : 'https://i.pravatar.cc/270' } alt="" className={s.users__image}/>
                                </picture>
                                { u.followed
                                    ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
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
    )
};

export default Users;