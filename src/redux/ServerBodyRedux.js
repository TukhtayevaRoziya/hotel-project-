import moduleName from "../Container/Servis/ServerBody/ServerBody.module.css";
import BathRoom from "../Container/Servis/ServerBody/BathRoom.png"
import Baseyni from "../Container/Servis/ServerBody/Baseyni.png";
import Restaurant from "../Container/Servis/ServerBody/Restaurant.png";
import DinningRoom from "../Container/Servis/ServerBody/DinningRoom.png";
let SERVERBODY = "SERVERBODY"
let ServerBody = [
    {
        id: 1, classBody: moduleName.block_1, bathClass: moduleName.img_bath,
        text_vannaClass: moduleName.text_vanna, picture: BathRoom,
        text_vanna_titleClass: moduleName.text_vanna_title, title: "Ванна",
        text_vanna_img: moduleName.text_vanna_img,
        text_vanna_words: moduleName.text_vanna_words,
    },
    {
        id: 2, classBody: moduleName.block_2, bathClass: moduleName.img_bath2,
        text_vannaClass: moduleName.text_vanna2, picture: Baseyni,
        text_vanna_titleClass: moduleName.text_vanna_title2, title: "Бассейны",
        text_vanna_img: moduleName.text_vanna_img2,
        text_vanna_words: moduleName.text_vanna_words2,
    },
    {
        id: 3, classBody: moduleName.block_1, bathClass: moduleName.img_bath,
        text_vannaClass: moduleName.text_vanna, picture: Restaurant,
        text_vanna_titleClass: moduleName.text_vanna_title, title: "Рестораны",
        text_vanna_img: moduleName.text_vanna_img,
        text_vanna_words: moduleName.text_vanna_words,
    },
    {
        id: 4, classBody: moduleName.block_2,
        bathClass: moduleName.img_bath2,
        text_vannaClass: moduleName.text_vanna2,
        picture: DinningRoom,
        text_vanna_titleClass: moduleName.text_vanna_title2,
        title: "Шведский стол",
        text_vanna_img: moduleName.text_vanna_img2,
        text_vanna_words: moduleName.text_vanna_words2
    }
]

export const ServerBodyRedux = (state = ServerBody, action) => {
    switch (action.type) {
        case SERVERBODY:
            return state;
        default:
            return state
    }
}