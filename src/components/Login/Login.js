import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'Login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'Password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'RememberMe'} component={'input'} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    };

    return(
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    )
};

export default Login;