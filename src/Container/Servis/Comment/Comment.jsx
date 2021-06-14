import React from "react";
import moduleName from "./Comment.module.css";
import people from "./people img.png";
import { reduxForm } from "redux-form";
import { CommentForm } from "./CommentFrom";

const Comment = (props) => {
    const onAddPost = (values) => {
        props.CommentAC(values.name, values.post)
    }
    let mapComment = props.comment.map(c => <div key={c.id} className={moduleName.text_body}>
        <div className={c.box_class}>
            <div className={moduleName.img_body}>
                <img src={c.avatar} alt="" />
            </div>
            <div className={moduleName.post_body}>
                <h1 className={moduleName.post_title}> {c.name} </h1>
                <p className={moduleName.post}>{c.post} </p>
            </div>
        </div>
    </div>
    )
    return (
        <>
            <div className={moduleName.title_body}>
                <h1 className={moduleName.title}>
                    Отзывы:
                </h1>
            </div>
            <div className={moduleName.Comment}>
                {mapComment}
            </div>
            <div className={moduleName.text_body + " " + moduleName.inp_body}>
                <div className={moduleName.text_box}>
                    <div className={moduleName.img_body}>
                        <img src={people} alt="" />
                    </div>
                    <CommentReduxForm onSubmit={onAddPost} />
                </div>
            </div>
        </>
    )
}

const CommentReduxForm = reduxForm({ form: "addNewPost" })(CommentForm)

export default Comment;
