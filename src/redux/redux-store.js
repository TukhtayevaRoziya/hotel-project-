import Kanal from "./KanallarRedux";
import IndicatorRedux from "./IndicatorRedux";
import GalareyaRedux from "./GalareyaRedux";
import HomeLuksReduser from "./HomeLuksReduser";
import { HeaderReduser } from "./HeaderReduser";
import LuksReduser from "./LuksRedux";
import { reducer as formReducer} from "redux-form"
import HeaderLuksIndigoReduser from "./HeaderLuksIndigoReduser";
import { CommentRedux } from "./CommentRedux";
const { createStore, combineReducers } = require("redux");
// const { default: HomeReduser } = require("./HomeReduser");
let reducers = combineReducers({
    kanal: Kanal,
    homeluks: HomeLuksReduser,
    indicator: IndicatorRedux,
    galareya: GalareyaRedux,
    headerlink: HeaderReduser,
    luks: LuksReduser,
    headerluksindigo: HeaderLuksIndigoReduser,
    comment: CommentRedux,
    form:formReducer,

});
let store = createStore(reducers);
export default store;