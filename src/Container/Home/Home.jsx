import React from "react";
import a from "./Home.module.css";
import Homeheader from "./home_header/Homeheader";
import IndicatorContainer from "./Indicator/IndicatorContainer";
import LuksContainer from "./Luks/LuksContainer";

const Home = () => {
    return<div className={a.Home}>
        <Homeheader />
        <IndicatorContainer />
        <LuksContainer />
    </div>
}

export default Home;