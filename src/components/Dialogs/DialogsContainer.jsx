import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsPage-reducer';

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;