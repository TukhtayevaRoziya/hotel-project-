import { connect } from "react-redux";
import ServerBody from "./ServerBody"
let mapStateToProps = (state) => ({
    server: state.server
})
export default connect(mapStateToProps)(ServerBody)