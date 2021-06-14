import React from "react";
import { reduxForm } from "redux-form";
import { DayFrom } from "./DayFrom";
import a from "./HeaderIndigoBody.module.css";

const HeaderIndigoBody = (props) => {
    const onAddPost = (values) => {
        // values.nextday, values.nextmonth, values.month,
        console.log( values.day)
    }
    return (
        <div className={a.violet_body}>
            <div className={a.violet_box_body}>
                <div className={a.indigo_box_body_header}>
                    <div className={a.indigo_box_title_body}>
                        <h1>Забронируйте свой отдых сейчас</h1>
                    </div>
                    <DayReduxForm onSubmit={onAddPost}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderIndigoBody;

const DayReduxForm = reduxForm({ form: "days" })(DayFrom)
