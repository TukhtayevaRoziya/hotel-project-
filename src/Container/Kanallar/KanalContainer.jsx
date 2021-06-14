import Kanallar from "./Kanallar";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
    return {
        kanal: state.kanal
    }
}

export default connect(mapStateToProps)(Kanallar)