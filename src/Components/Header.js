import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>{

       
    let sPath = window.location.pathname;
    var pageName = sPath.substring(sPath.lastIndexOf('/') + 1);

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <a href="/Home" id="logo"></a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink activeClassName="active" className="nav-link" exact to="/Home"> Home </NavLink><span className="sr-only"></span>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" exact to="/BeginResearch">New Research</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" exact to="/ResearchHistory">Research History</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" exact to="/Login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" exact to="/About">About</NavLink>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;