import { connect } from "react-redux";
import Header from "./Header";
let mapStateToProps=(state)=>({ header:state.headerlink })
export default connect(mapStateToProps)(Header)