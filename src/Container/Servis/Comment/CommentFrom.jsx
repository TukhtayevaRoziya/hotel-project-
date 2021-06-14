import React from "react";
import moduleName from "./Comment.module.css";
import { Input } from "../../../common/formControl/Text";
import { maxlengthCreator, required } from "../../../utils/validators/validators";
import { Field } from "redux-form";

let maxlength15 = maxlengthCreator(150);

export const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={moduleName.CommentForm}>
            <div className={moduleName.name_body}>
                <div className={moduleName.name_body}>
                    <Field component={Input} name="name"
                        validate={[required, maxlength15]} placeholder="Введите своё имя" />
                </div>
                <div className={moduleName.name_body + " " + moduleName.post_body}>
                    <Field component={Input} name="post"
                        validate={[required, maxlength15]} placeholder="Оставте свой отзыв" />
                </div>
                <button >Send Post</button>
             </div> 
        </form>
    );
};
