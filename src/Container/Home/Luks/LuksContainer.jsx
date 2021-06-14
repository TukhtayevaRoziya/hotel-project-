import { connect } from "react-redux";
import Luks from "./Luks";

let mapStateToProps=(state)=>{
    return{
        homeluksreduser: state.homeluks,
        luks:state.luks
    }
}

export default connect(mapStateToProps)(Luks)