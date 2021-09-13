import React from "react";
import styles from './FormControls.module.css';

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <label className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
                {props.children}
                {hasError && <span>{meta.error}</span>}
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

