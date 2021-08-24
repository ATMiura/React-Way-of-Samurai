import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsPage-reducer';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.dialogs__avatar}>
                <picture className={s.dialogs__picture}>
                    <img src={props.avatar} alt="" className={s.dialogs__image}/>
                </picture>
            </div>
            <NavLink to={path} className={s.dialog__link}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.dialog__chat}>
            {/*<div className={s.dialog__message + ' ' + s.dialog__left}>{props.messageFriend}</div>*/}
            <div className={s.dialog__message + ' ' + s.dialog__right}>{props.message}</div>
        </div>
    )
};

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />);
    let messageElements = state.messages.map(m => <Message id={m.id} message={m.message} messageFriend={m.messageFriend} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }

                <div className={s.message__add}>
                    <div>
                        <textarea placeholder="Enter your message" onChange={ onNewMessageChange } value={ newMessageBody } />
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick }>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;