import React, {InputHTMLAttributes} from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import style from './FormElement.module.css'


export const FormElementCreator = (Element:string) => ({input, meta, ...props}: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {

    const hasError = meta.touched && meta.error

    return (
        <>
            <Element className={meta.touched && meta.error ? style.error : ''} {...input} {...props}/>
            {hasError && <span className={style.spanError}>{meta.error}</span> }
        </>
    )
}


export const FormElementInput = FormElementCreator('input')
export const FormElementTextArea = FormElementCreator('textarea')