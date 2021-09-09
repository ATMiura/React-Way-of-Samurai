import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar} />);
    let messageElements = state.messages.map(m => <Message key={m.id} id={m.id} message={m.message} messageFriend={m.messageFriend} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if(!props.isAuth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }

                <AddMessageReduxFrom onSubmit={addNewMessage} />
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className={s.message__add}>
                <div>
                    <Field component={'textarea'} name={'newMessageBody'} placeholder={'Enter your message'} />
                </div>
                <div>
                    <button>Add message</button>
                </div>
            </div>
        </form>
    )
};

const AddMessageReduxFrom = reduxForm({
    form: 'dialogMessageForm'
})(AddMessageForm);

export default Dialogs;