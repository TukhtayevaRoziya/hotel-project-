import React from "react";
import a from "./Header.module.css";
import HeaderLink from "./HeaderLink/HeaderLink";
const Header = (props) => { 
    let map_header = props.header.map(h => <HeaderLink key={h.id} to={h.to} name={h.name} />)
    return <div className={a.Header}> {map_header} </div>
}

export default Header;