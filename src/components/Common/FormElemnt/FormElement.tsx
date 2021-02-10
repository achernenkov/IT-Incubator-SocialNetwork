import React from "react";
import style from './FormElement.module.css'


export const FormElement = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            <div><textarea className={meta.touched && meta.error ? style.error : ''} {...input} {...props}/></div>
            {hasError && <span className={style.spanError}>{meta.error}</span> }
        </div>
    )
}

export const FormElementInput = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error

    return (
        <>
            <input className={meta.touched && meta.error ? style.error : ''} {...input} {...props}/>
            {hasError && <span className={style.spanError}>{meta.error}</span> }
        </>
    )
}