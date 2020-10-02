import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper container" style={{background:"#0a192f"}}>
                <Link to="/" className="brand-logo navItem" ></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {/* <li> <a href="#" className="left brand-logo " ></a></li> */}
                    <li >
                        <NavLink activeClassName="menu_active" className="navItem" to="/about">About</NavLink >
                     </li>
                    <li >
                        <NavLink activeClassName="menu_active" className="navItem" to="/work">Work</NavLink >
                    </li>
                    <li >
                        <NavLink activeClassName="menu_active" className="navItem" to="/contact">Contact</NavLink >
                    </li>
                </ul>
            </div>
        </nav>
    )
{/* <img src={logo}/> */}
}

export default Nav;