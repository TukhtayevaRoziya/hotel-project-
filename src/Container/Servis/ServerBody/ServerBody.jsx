import React from "react";
import BathRoom from "./BathRoom.png";
import Baseyni from "./Baseyni.png";
import Restaurant from "./Restaurant.png";
import DinningRoom from "./DinningRoom.png";
import Chiziq from "./chiziq.png";
import moduleName from './ServerBody.module.css'

const ServerBody = () => {
    return (
        <div>
            <div className={moduleName.block_1}>
                <div className={moduleName.img_bath}>
                    <img src={BathRoom} alt="" />
                </div>
                <div className={moduleName.text_vanna}>
                    <h1 className={moduleName.text_vanna_title}>Ванна</h1>
                    <img className={moduleName.text_vanna_img} src={Chiziq} alt="" />
                    <p className={moduleName.text_vanna_words}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            <div className={moduleName.block_2}>
                <div className={moduleName.img_bath2}>
                    <img src={Baseyni} alt="" />
                </div>
                <div className={moduleName.text_vanna2}>
                    <h1 className={moduleName.text_vanna_title2}>Бассейны</h1>
                    <img className={moduleName.text_vanna_img2} src={Chiziq} alt="" />
                    <p className={moduleName.text_vanna_words2}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            <div className={moduleName.block_1}>
                <div className={moduleName.img_bath}>
                    <img src={Restaurant} alt="" />
                </div>
                <div className={moduleName.text_vanna}>
                    <h1 className={moduleName.text_vanna_title}>Рестораны</h1>
                    <img className={moduleName.text_vanna_img} src={Chiziq} alt="" />
                    <p className={moduleName.text_vanna_words}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>

            <div className={moduleName.block_2}>
                <div className={moduleName.img_bath2}>
                    <img src={DinningRoom} alt="" />
                </div>
                <div className={moduleName.text_vanna2}>
                    <h1 className={moduleName.text_vanna_title2}>Шведский стол</h1>
                    <img className={moduleName.text_vanna_img2} src={Chiziq} alt="" />
                    <p className={moduleName.text_vanna_words2}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                         veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        </div>
    )
}

export default ServerBody
