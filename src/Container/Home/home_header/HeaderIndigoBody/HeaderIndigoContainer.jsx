import { connect } from "react-redux";
import { HeaderLuksIndigoReduserAC } from "../../../../redux/HeaderLuksIndigoReduser";
import HeaderIndigoBody from "./HeaderIndigoBody";

let mapStateToProps=(state)=>({
    day:state.headerluksindigo.newtext,
})
export default connect( mapStateToProps, {HeaderLuksIndigoReduserAC})(HeaderIndigoBody)