import { connect } from "react-redux";
import Galareya from "./Galareya";
let mapStateToProps = (state) => ({ galareya: state.galareya })
export default connect(mapStateToProps)(Galareya)