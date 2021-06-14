import React from 'react'
import a from './Galareya.module.css'

const Galareya = (props) => {
    let galareya_map = props.galareya.map(g => <div key={g.id} className={g.d_class}>
        <img className={g.img_class1} src={g.src1} alt="" />
        <img className={g.img_class2} src={g.src2} alt="" />
    </div>)
    return <div className={a.Galareya}>{galareya_map}</div>
}

export default Galareya