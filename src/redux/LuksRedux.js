import a from "../Container/Home/Luks/Luks.module.css";
import luks1 from "../Container/Home/Luks/LuksPhoto/Luks1.png";
import luks2 from "../Container/Home/Luks/LuksPhoto/Luks2.png";
import luks3 from "../Container/Home/Luks/LuksPhoto/Luks3.png";
import luks4 from "../Container/Home/Luks/LuksPhoto/Luks4.png";
import chiziq from "../Container/Home/Luks/LuksPhoto/chiziq.png";

let LUKSREDUSER = "LUKS"
let imgChiziq = <div className={a.Luks_block_chiziq_body}><img className={a.Luks_block_chiziq} src={chiziq} alt="" /></div>

let luks = {
    luks_array1 : {
        blockImg: <img className={a.Luks_block_img} src={luks1} alt="" />,
        Luks_block_title1: <><div className={a.Luks_block1}><h4 className={a.Luks_block_title}> Комнаты <b> Спальни </b></h4></div> {imgChiziq} </>,
    },
    luks_array2 : {
        blockImg: <img className={a.Luks_block_img} src={luks2} alt="" />,
        Luks_block_title2: <><div className={a.Luks_block2 + ' ' + a.Luks_block1}><h4 className={a.Luks_block_title}> Хол <b> Залы </b></h4></div> {imgChiziq}</>,
    },
    luks_array3 : {
        blockImg: <img className={a.Luks_block_img} src={luks3} alt="" />,
        Luks_block_title1: <><div className={a.Luks_block1}><h4 className={a.Luks_block_title}> Бассейны <b>Зимние и Летние</b></h4></div> {imgChiziq}</>,
    },
    luks_array4 : {
        blockImg: <img className={a.Luks_block_img} src={luks4} alt="" />,
        Luks_block_title2: <><div className={a.Luks_block2 + ' ' + a.Luks_block1}>
            <h4 className={a.Luks_block_title}> Душ <b> Ванна </b></h4></div> {imgChiziq}</>,
    }
}

const LuksReduser = (state = luks, action) => {
    switch (action.type) {
        case LUKSREDUSER:
            return {...state}
        default:
            return state
    }
}

export const LuksAC = (luks) => ({ LUKSREDUSER, luks })

export default LuksReduser;