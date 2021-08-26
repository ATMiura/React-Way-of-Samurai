import React from 'react';
import s from './Navbar.module.css';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends  = (props) => {
    let state = props.sidebar;
    let friendElements = state.friends.map(f => <FriendsItem avatar={f.avatar} name={f.name}/>);

    return(
        <div className={s.friends}>
            <div className={s.friends__list}>
                {friendElements}
            </div>
        </div>
    )
}


export default Friends;