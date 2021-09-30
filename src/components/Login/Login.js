import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from '../Common/FormControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return(
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type:"password"})}
            {createField(null, "rememberMe", [], Input, {type:"checkbox"}, "Remember Me",)}
            { error && <div className={style.formSummaryError}>{ error }</div> }

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image", "captcha",[required], Input, {})}

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
        props.logIn(formData.email, formData.password, formData.rememberMe, formData.captcha)
    };

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return(
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </>
    )
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {logIn, logOut})(Login);