import React from "react";
import s from './preloader.module.css';

let Preloader = (props) => {
    console.log("Preloader");
    return(
        <div className={s.preloader}>
            <div className={s.spinner}></div>
        </div>
    )
};

export default Preloader;