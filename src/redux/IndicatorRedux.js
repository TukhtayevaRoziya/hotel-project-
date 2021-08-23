import a from "../Container/Home/Indicator/Indicator.module.css"
import indicator1 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant1.png";
import indicator2 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant10.png";
import indicator3 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant3.png";
import indicator4 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant4.png";
import indicator5 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant5.png";
import indicator6 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant6.png";
import indicator7 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant7.png";
import indicator8 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant8.png";
import indicator9 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant9.png";
import indicator10 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant2.png";
import indicator11 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant13.png";
import indicator12 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant12.png";
import indicator13 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant11.png";
import indicator14 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant18.png";
import indicator15 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant15.png";
import indicator16 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant16.png";
import indicator17 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant17.png";
import indicator18 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant14.png";
import indicator19 from "../Container/Home/Indicator/IndicatorPhoto/Restaurant19.png";
let INDICATOR = 'INDICATOR'
let indicators = [
    { id: 1, class: a.Indicator_box, restarant_src: indicator1 },
    { id: 2, class: a.Indicator_box, restarant_src: indicator2 },
    { id: 3, class: a.Indicator_box, restarant_src: indicator3 },
    { id: 4, class: a.Indicator_box, restarant_src: indicator4 },

    { id: 5, class: a.Indicator_box, restarant_src: indicator5 },
    { id: 6, class: a.Indicator_box, restarant_src: indicator6 },
    { id: 7, class: a.Indicator_box, restarant_src: indicator7 },
    { id: 8, class: a.Indicator_box, restarant_src: indicator8 },

    { id: 9, class: a.Indicator_box, restarant_src: indicator9 },
    { id: 10, class: a.Indicator_box, restarant_src: indicator10 },
    { id: 11, class: a.Indicator_box, restarant_src: indicator11 },
    { id: 12, class: a.Indicator_box, restarant_src: indicator12 },

    { id: 13, class: a.Indicator_box, restarant_src: indicator13 },
    { id: 14, class: a.Indicator_box, restarant_src: indicator14 },
    { id: 15, class: a.Indicator_box, restarant_src: indicator15 },
    { id: 16, class: a.Indicator_box, restarant_src: indicator16 },

    { id: 17, class: a.Indicator_box, restarant_src: indicator17},
    { id: 18, class: a.Indicator_box, restarant_src: indicator18 },
    { id: 19, class: a.Indicator_box, restarant_src: indicator19 },
    { id: 20, class: a.Indicator_box, restarant_src: indicator8 },
]
const IndicatorRedux = (state = indicators, action) => {
    switch (action.type) {
        case INDICATOR:
            return state
        default:
            return state
    }
}

export const Indicator = (indicator) => ({ INDICATOR, indicator })

export default IndicatorRedux