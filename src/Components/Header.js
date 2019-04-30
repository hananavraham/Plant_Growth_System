import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>{

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" exact to="/Home"> Home </NavLink><span className="sr-only">(current)</span>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/BeginResearch">New Research</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/ResearchHistory">Research History</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/About">About</NavLink>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
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