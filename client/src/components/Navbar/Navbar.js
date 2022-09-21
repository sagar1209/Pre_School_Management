// import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../../img/home.png';
import './Navbar.css'
// import "../../App.css";

function Navbar(props) {
    return (
        <>
            <div className="navBar">
                {/* <div classname="Logo">
                    <Logo/>
                </div> */}
                <ul className="list">

                    {/* <li class="item"> */}
                        <NavLink className="nav-link active i" aria-current="page" to="/">
                            <img className='nav_img' src={Home} />
                        </NavLink>
                    {/* </li> */}

                    {/* <li class="item"> */}
                         <NavLink className="nav-link i" to="/about">About Us</NavLink>
                    {/* </li> */}

                    {/* <li class="item"> */}
                         
                        <NavLink className="nav-link i" to="/facilities">Facilities</NavLink>
                    {/* </li> */}
                    
                    {/* <li class="item"> */}
                        
                        <NavLink className="nav-link i" to="/gallery">Gallery</NavLink>
                    {/* </li> */}

                        <NavLink className="nav-link i" to="/gallery">Activities</NavLink>
                        <NavLink className="nav-link i" to="/gallery">Events & Celenrations</NavLink>
                        <NavLink className="nav-link i" to="/admission">Admission</NavLink>

                    {/* <li class="item"> */}
                        <NavLink className="nav-link i" to="/contact" id="con">Contact Us</NavLink>
                    {/* </li> */}

                    {
                        props.auth ?
                            <>
                                {/* <li class="item"> */}
                                    <NavLink className="nav-link i" to="/login">Login</NavLink>
                                {/* </li> */}

                            </> : <>

                            {/* <li class="item"> */}
                                    <NavLink className="nav-link i" to="/logout">Logout</NavLink>
                                {/* </li> */}
                            </>
                    }

                </ul>

            </div>
        </>
    );
}

export default Navbar;