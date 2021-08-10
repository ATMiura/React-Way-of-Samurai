import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

let FriendsItem = (props) => {
    return (
        <div className={s.friends__item}>
            <picture>
                <img src={props.avatar} alt="" className={s.friends__avatar} />
            </picture>
            <div className={s.friends__name}>{props.name}</div>
        </div>
    )
};

const Friends = (props) => {
    let friendElements = props.state.friends.map(f => <FriendsItem avatar={f.avatar} name={f.name} />);

    return (
        <div className={s.friends}>
            <div className={s.friends__list}>
                { friendElements }
            </div>
        </div>
    )
};

const Navbar = (props) => {
    return (
        <div className={s.sidebar}>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
            </nav>
            <Friends state={props.state} />
        </div>
    )
};

export default Navbar;