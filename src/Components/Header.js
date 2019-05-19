import React, { Component } from 'react';
import { Route, Redirect }  from 'react-router';
import {NavLink} from 'react-router-dom';
import {FaSignOutAlt} from 'react-icons/fa';
class Header extends Component{
    constructor(props){
        super(props)

        this.state={
            logout: false
        }
        this.logout = this.logout.bind(this);
    }

    logout(){
        console.log('logout');
        localStorage.clear();
        this.setState({logout:true});
    }

    render(){
        if(this.state.logout == true){
            window.location.href = '/';
        }

        const styles = {
            container :{
                display: 'none'
            }     
        };

        if(localStorage.getItem('userId')){
            styles.container.display = 'block'
        }


        let sPath = window.location.pathname;
        var pageName = sPath.substring(sPath.lastIndexOf('/') + 1);
        return (
            <header>
                <nav className="navbar navbar-expand-lg">
                    <a href="/Home" id="logo"></a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink activeClassName="active" className="nav-link" innerRef={this.refCallback} exact to="/Home"> Home </NavLink><span className="sr-only"></span>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" innerRef={this.refCallback} exact to="/BeginResearch">New Research</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" innerRef={this.refCallback} exact to="/ResearchHistory">Research History</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" exact to="/About">About</NavLink>
                        </li>
                        </ul>
                        <button style={styles.container} id="logoutButton" onClick={this.logout}><FaSignOutAlt/></button>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }


}
        
export default Header;