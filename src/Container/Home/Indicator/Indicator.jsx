import React from 'react'
import a from './Indicator.module.css'
import Indicator from 'react-carousel-indicator'
import 'react-carousel-indicator/dist/index.css'
 
const Indicators =(props)=> {
  let indicator_map=props.indicator.map(i=><img key={i.id} className={i.class} src={i.restarant_src} alt=""/>)
    return (
      <div className={a.Indicator} >
        <div className={a.Indicator_body}>
      <Indicator className={a.Indicator_header} itemsPerSlide={4} itemGap={0}>
        {indicator_map}
      </Indicator>
      </div>
      </div>
    )
}
export default Indicators;