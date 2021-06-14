import React from "react";
import { Field } from "redux-form";
import a from "./HeaderIndigoBody.module.css";
import { required, maxlengthCreator } from "../../../../utils/validators/validators";
import { Input } from "../../../../common/formControl/Text";
const maxlength20 = maxlengthCreator(20)
const maxlength2 = maxlengthCreator(2)
export const DayFrom = (props) => {
    return (
        <div onSubmit={props.handleSubmit}>
            <div className={a.violet_box_white_boxs}>
                <div className={a.indigo_box_white_1_body}>
                    <h6 className={a.indigo_box_white_1_title}>Первый день</h6>
                    <div className={a.indigo_box_white}>
                        <Field name={"day"} component={Input} validate={[required, maxlength2]}
                            className={a.indigo_box_white_text} type="number" />
                        <Field name={"month"} component={Input} validate={[required, maxlength20]}
                            className={a.indigo_box_white_text} type="month" />

                    </div>
                </div>
                <div className={a.indigo_box_white_1_body}>
                    <h6 className={a.indigo_box_white_1_title}>Последний день</h6>
                    <div className={a.indigo_box_white}>
                        <Field name={"nextday"} component={Input} validate={[required, maxlength2]}
                            className={a.indigo_box_white_text} type="number" />
                        <Field name={"nextmonth"} component={Input} validate={[required, maxlength20]}
                            className={a.indigo_box_white_text} type="month" />
                    </div>
                </div>
            </div>
            <div className={a.indigo_box_kod}>
                <div>
                    <h6>Имеете промо-код</h6>
                    <button>Подать заявку?</button>
                </div>
            </div>
        </div>
    )
}
