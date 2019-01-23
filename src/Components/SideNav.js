import React from "react";
import {NavLink} from 'react-router-dom';


const SideNav = () => {

    return (
        <div className="sidenav">
            <NavLink exact to="/Home"> Home </NavLink>
            <NavLink to="/Plant"> Plant Type </NavLink>
            <NavLink to="/Table"> Table </NavLink>
            <NavLink to="/BeginResearch"> Begin Research </NavLink>
            <NavLink to="/ResearchHistory"> Research History </NavLink>
        </div>
    );
}

export default SideNav;

