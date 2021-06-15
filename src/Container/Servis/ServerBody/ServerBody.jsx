import React from "react";

import Chiziq from "./chiziq.png";
import moduleName from './ServerBody.module.css'

const ServerBody = (props) => {

    let ServerBodymap = props.server.map(s => <div className={s.classBody}>
        <div className={s.bathClass}>
            <img src={s.picture} alt="" />
        </div>
        <div className={s.text_vannaClass}>
            <h1 className={s.text_vanna_titleClass}>{s.title}</h1>
            <img className={moduleName.text_vanna_img} src={Chiziq} alt="" />
            <p className={s.text_vanna_words}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
    </div>
    )
    return (
        <div>
            {ServerBodymap}
        </div>
    )
}

export default ServerBody
