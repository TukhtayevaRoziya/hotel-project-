import React from "react";
import moduleName from "./Servis.module.css";
import Center from "./ServerBadCenter.png";
import Tue from "./ServerTue.png";
import BathImg from "./bath.png";
import BadRoomImg from "./badRoomImg.png";
import ServerBody from "./ServerBody/ServerBody";
import CommentContainer from "./Comment/CommentContainer";
const Servis = () => {
    return (
        <div className={moduleName.Servis_body}>
            <div className={moduleName.Servis}>
                <h1 className={moduleName.servis_title}>Комнаты</h1>
                <div className={moduleName.server_body}>
                    <img className={moduleName.ServerCenterImg} src={Center} alt="" />
                </div>
            </div>
            <div className={moduleName.Tue_body}>
                <div className={moduleName.Tue_Header}>
                    <img className={moduleName.Tue} src={Tue} alt="" />
                </div>
                <div className={moduleName.Tue_text_Header}>
                    <h1 className={moduleName.Tue_text}>Зимний Бассейн на склоне холма</h1>
                    <img className={moduleName.TueChiziq} src="chiziq.png" alt=""/>
                    <p className={moduleName.Tue_words}>"Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
            <div className={moduleName.imgs_body}>
                <img src={BathImg} alt="" />
                <div>
                </div>
                <img src={BadRoomImg} alt="" />
            </div>
            <ServerBody />
            <CommentContainer />
        </div>
    )
}

export default Servis;