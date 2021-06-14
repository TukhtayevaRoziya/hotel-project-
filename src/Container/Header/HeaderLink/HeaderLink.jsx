import React from "react";
import { NavLink } from "react-router-dom";
import a from "./HeaderLink.module.css";
const HeaderLink = (props) => {
    return (<NavLink activeClassName={a.active } className={a.Link} to={props.to}>{props.name}</NavLink>)
}

export default HeaderLink;