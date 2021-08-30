import React from 'react';
import s from './User.module.css';

const Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
            {id: 1, followed: false, fullName: 'Dmitriy',    status: 'I am a boss', avatar: 'https://i.pravatar.cc/270', location: { country: 'Belarus', city: 'Minsk',}},
            {id: 2, followed: true,  fullName: 'Sasha',      status: 'I am a boss', avatar: 'https://i.pravatar.cc/270', location: { country: 'Russia', city: 'Moscow',}},
            {id: 3, followed: false, fullName: 'Andrew',     status: 'I am a boss', avatar: 'https://i.pravatar.cc/270', location: { country: 'Ukraine', city: 'Kiev',}},
            {id: 4, followed: true,  fullName: 'User name',  status: 'I am a boss', avatar: 'https://i.pravatar.cc/270', location: { country: 'User country', city: 'User city',}}
        ]);
    }

    return (
        <div className={s.users}>
            <div className={s.usersItems}>
                {
                    props.users.map(u => <div key={u.id} className={s.user + ' ' + s.active}>
                            <div className={s.users__avatar}>
                                <picture className={s.users__picture}>
                                    <img src={u.avatar} alt="" className={s.users__image}/>
                                </picture>
                                { u.followed
                                    ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                                }
                            </div>
                            <div>
                                <div className={s.users__fullName}>{u.fullName}</div>
                                <div className={s.users__status}>{u.status}</div>
                            </div>
                            <div className={s.location}>
                                <div className={s.location__country}>{u.location.country}</div>
                                <div className={s.location__city}>{u.location.city}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
};

export default Users;