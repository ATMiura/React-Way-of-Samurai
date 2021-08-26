import s from "../Dialogs.module.css";
import React from "react";

const Message = (props) => {
    return (
        <div className={s.dialog__chat}>
            {/*<div className={s.dialog__message + ' ' + s.dialog__left}>{props.messageFriend}</div>*/}
            <div className={s.dialog__message + ' ' + s.dialog__right}>{props.message}</div>
        </div>
    )
};

export default Message;