import {Field, Form} from "react-final-form";
import React from "react";

const LoginForm = (props) => {
    return (
        /*<Form initialValues={{}} onSubmit={props.onSubmit}>
            {({ handleSubmit, pristine, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name='login' render={() => (
                            <label>
                                <input type="text" placeholder="Login" name="login"/>
                            </label>
                        )}/>
                    </div>
                    <div>
                        <Field name='password' render={() => (
                            <label>
                                <input type="password" placeholder="password" name="password"/>
                            </label>
                        )}/>
                    </div>
                    <div>
                        <Field name='rememberMe' render={() => (
                            <label>
                                <input type="checkbox" name="rememberMe"/>
                                <span>Remember me</span>
                            </label>
                        )}/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            )}
        </Form>*/
        /*<Form onSubmit={values => {}} render={({ handleSubmit, form, submitting, pristine, values }) => {
            return (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name='login' render={() => (
                            <label>
                                <input type="text" placeholder="Login" name="login"/>
                            </label>
                        )}/>
                    </div>
                    <div>
                        <Field name='password' render={() => (
                            <label>
                                <input type="password" placeholder="password" name="password"/>
                            </label>
                        )}/>
                    </div>
                    <div>
                        <Field name='rememberMe' render={() => (
                            <label>
                                <input type="checkbox" name="rememberMe"/>
                                <span>Remember me</span>
                            </label>
                        )}/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            )
        }}
        />*/
    )
};

export default LoginForm;