import React from "react";
import HeaderIndigoContainer from "./HeaderIndigoBody/HeaderIndigoContainer";
import a from "./Home_header.module.css";

const Home_header = () => {
    return (
        <div className={a.home}>
            <div className={a.jbo_body}>
                <img className={a.jbo_text} src="JBO.png" alt="" />
            </div>
            <div className={a.home_title_body}>
                <h1 className={a.home_title}>Mardan Palas</h1>
            </div>
            <HeaderIndigoContainer />
        </div>
    )
}

export default Home_header;