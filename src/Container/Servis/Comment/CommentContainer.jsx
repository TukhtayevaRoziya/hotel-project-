import { connect } from "react-redux";
import Comment from "./Comment";
import { CommentAC } from "../../../redux/CommentRedux";
let mapStateToProps = (state) => ({
    comment: state.comment.add,
    form: state.form
})
export default connect(mapStateToProps, { CommentAC })(Comment)