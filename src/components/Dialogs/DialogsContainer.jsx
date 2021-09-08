import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsPage-reducer';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
    }
};

export default compose(
    //withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(Dialogs);