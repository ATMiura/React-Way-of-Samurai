import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <>
            <header className={s.header}>
                <div className={s.header__logo}>
                    <div className={s.logo}>
                        <picture className={s.logo__picture}>
                            <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' alt="" className={s.logo__image} />
                        </picture>
                    </div>
                </div>

                <div className={s.login}>
                    {
                        props.isAuth ?
                            <div className={`${s.btn} ${s.login__name}`}>{props.login}</div> :
                            <NavLink to={'/login'} className={s.btn}>Login</NavLink>
                    }
                </div>
            </header>
        </>
    )
};

export default Header;