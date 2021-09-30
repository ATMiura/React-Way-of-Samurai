import {connect, useDispatch, useSelector} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator} from '../../redux/dialogsPage-reducer';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    }
};

const DialogsContainer = () => {
    const dialogsPage = useSelector(state => state.dialogsPage);
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Dialogs dialogsPage={dialogsPage} isAuth={isAuth} />
    )
};

/*
const DialogsContainer = () => {
    const dialogsPage = useSelector(state => state.dialogsPage);
    //const AuthRedirect = compose(withAuthRedirect(Dialogs))(<Dialogs dialogsPage={dialogsPage}/>);
    return compose(withAuthRedirect,Dialogs({dialogsPage:dialogsPage}))(Dialogs)
};
*/

export default withAuthRedirect(DialogsContainer);

/*
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(Dialogs);*/
