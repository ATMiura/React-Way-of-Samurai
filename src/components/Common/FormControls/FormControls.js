import React from "react";
import styles from './FormControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <>
            <label className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
                {children}
                {hasError && <span>{error}</span>}
            </label>
        </>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...props.input} {...restProps} />
        </FormControl>
    )
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
};

export const createField = (placeholder, name, validators, component, props= {}, text = "") => (
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={component}
            validate={validators}
            {...props}
        />{text && <span>{text}</span>}
    </div>
);

