import React from "react";
import moduleName from "./Input.module.css"
export const Input = (props) => {
    const { meta, input, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}


export const Textarea = (props) => {
    const { meta, input, child, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const FormControl = ({ meta, input, child, ...props }) => {
    let hasError = meta.touched && meta.error
    return (
        <div className={(hasError ? moduleName.Input : "") + " " + moduleName.Error}>
            {hasError && <div className={moduleName.errorText}>{meta.error}</div>}
            {props.children}
        </div>
    )
}