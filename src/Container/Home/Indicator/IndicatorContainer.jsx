import { connect } from "react-redux";
import Indicators from "./Indicator";
let mapStateToProps=(state)=>{
    return{
        indicator:state.indicator
    }
}
export default connect(mapStateToProps)(Indicators)
