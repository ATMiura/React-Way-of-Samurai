import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {sendMessageCreator} from '../../redux/dialogsPage-reducer';
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(Dialogs);