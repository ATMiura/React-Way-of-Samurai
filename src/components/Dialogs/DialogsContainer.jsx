import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsPage-reducer';
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

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

const DialogsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator());
            };

            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            };
            return (
                <Dialogs updateNewMessageBody={onNewMessageChange}
                         sendMessage={onSendMessageClick}
                         dialogsPage={state}
                />
            )
        }
    }
    </StoreContext.Consumer>
};

export default DialogsContainer;