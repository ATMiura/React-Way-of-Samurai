import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from '../Common/FormControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type:"password"})}
            {createField(null, "rememberMe", [], Input, {type:"checkbox"}, "Remember Me",)}
            { error && <div className={style.formSummaryError}>{ error }</div> }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password, formData.rememberMe)
    };

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return(
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
};

const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {logIn, logOut})(Login);