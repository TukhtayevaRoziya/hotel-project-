import React from "react";
import a from "./Kanallar.module.css";
const Kanallar = (props) => {
    let MapKanal = props.kanal.map(k => <a key={k.id} href={k.href}><img src={k.src} alt="" /></a>)
    return <div className={a.kanal}>{MapKanal}</div>
}

export default Kanallar;