import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn, logOut} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={Input} validate={[required]} placeholder={'Email'} />
            </div>
            <div>
                <Field type={'password'} name={'password'} component={Input} validate={[required]} placeholder={'Password'} />
            </div>
            <div>
                <label>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input} />
                    <span>Remember Me</span>
                </label>
            </div>
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