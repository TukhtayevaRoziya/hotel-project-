import React from "react";
import a from './Luks.module.css'
const LuksRender = (props) => {

    let mapLuks = props.map.map(l => <p key={l.id} className={a.Luks_block_text}>{l.Luks_p}</p>)
    return (
        <>
            <div className={a.Luks}>
                <div className={a.Luks_block_body}>
                    <div className={a.Luks_block2}>{props.luks_array1.Luks_block_title1}{mapLuks}</div>
                    {props.luks_array1.blockImg}
                </div>
            </div>
            <div className={a.Luks}>
                <div className={a.Luks_block_body}>
                    <div className={a.Luks_block1 + ' ' + a.Luks_block2 }>{props.luks_array2.Luks_block_title2} {mapLuks} </div>
                    {props.luks_array2.blockImg}
                </div>
            </div>
        </>
    )
}

export default LuksRender;