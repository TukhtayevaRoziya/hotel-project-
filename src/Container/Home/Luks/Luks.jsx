import React from "react";
import a from './Luks.module.css'
import LuksRender from "./LuksRender";

const Luks = (props) => {
    
    return (
        <div>
            <div className={a.Luks_block1}>{props.luks.Luks_block1}</div>
            <LuksRender map={props.homeluksreduser} luks_array1={props.luks.luks_array1} luks_array2={props.luks.luks_array2}/>
            <LuksRender map={props.homeluksreduser}  luks_array1={props.luks.luks_array3} luks_array2={props.luks.luks_array4}/>
        </div>
    )
}

export default Luks;