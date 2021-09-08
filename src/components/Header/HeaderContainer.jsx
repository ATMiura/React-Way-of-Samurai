import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {getAuth, setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth();
    }

    render() {
        return (
            <>
                <Header {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData, getAuth})(HeaderContainer);