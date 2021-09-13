import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'Login'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'Password'} component={Input} validate={[required]} />
            </div>
            <div>
                <label>
                    <Field type={'checkbox'} name={'RememberMe'} component={Input} />
                    <span>Remember Me</span>
                </label>
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