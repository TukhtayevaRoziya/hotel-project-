import a from "../Container/Home/Indicator/Indicator.module.css"
import indicator7 from "../Container/Home/Indicator/IndicatorPhoto/Indicator5.png";
import indicator8 from "../Container/Home/Indicator/IndicatorPhoto/Indicator8.png";
import indicator10 from "../Container/Home/Indicator/IndicatorPhoto/Indicator10.png";
let INDICATOR='INDICATOR'
let indicators=[
    {id:1, class:a.Indicator_box, restarant_src:'restarant1.png '},
    {id:2, class:a.Indicator_box, restarant_src:'Restarant 2.png '},
    {id:3, class:a.Indicator_box, restarant_src:'Restarant 3.png'},
    {id:4, class:a.Indicator_box, restarant_src:'Restarant 4.png'},

    {id:5, class:a.Indicator_box, restarant_src:'Restaurant9.png'},
    {id:6, class:a.Indicator_box, restarant_src:'Restaurant10.png'},
    {id:7, class:a.Indicator_box, restarant_src: indicator7},
    {id:8, class:a.Indicator_box, restarant_src:indicator8},

    {id:9, class:a.Indicator_box, restarant_src:'Restaurant8.png' },
    {id:10, class:a.Indicator_box, restarant_src:indicator10},
    {id:11, class:a.Indicator_box, restarant_src:'Restaurant5.png'},
    {id:12, class:a.Indicator_box, restarant_src:'Restaurant12.png'},

    {id:13, class:a.Indicator_box, restarant_src:'restarant1.png'},
    {id:14, class:a.Indicator_box, restarant_src:'Restaurant10.png'},
    {id:15, class:a.Indicator_box, restarant_src:'Restaurant8.png'},
    {id:16, class:a.Indicator_box, restarant_src:'Restaurant11.png'},

    {id:17, class:a.Indicator_box, restarant_src:'Restaurant5.png'},
    {id:18, class:a.Indicator_box, restarant_src:'Restaurant6.png'},
    {id:19, class:a.Indicator_box, restarant_src:'Restaurant7.png'},
    {id:20, class:a.Indicator_box, restarant_src:indicator8},
  ]
  const IndicatorRedux=(state=indicators , action)=>{
      switch (action.type) {
          case INDICATOR:
              return state
          default:
              return state
      }
  }

  export const Indicator=(indicator)=>({INDICATOR , indicator})

  export default IndicatorRedux