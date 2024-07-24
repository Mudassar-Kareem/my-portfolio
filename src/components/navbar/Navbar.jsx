import React from "react";
import "./Navbar.css";
import Toggle from "../toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () =>{
    return(
        
        <div className="n-wrapper" id="Navbar">
            <div className="n-left">
                <div className="name">
                    Portfolio
                </div>
                <Toggle/>
            
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                       <li><Link activeClass="active" to="Navbar" spy={true} smooth={true}> HOME</Link> </li>
                        <li><Link to="Services" spy={true} smooth={true} > SERVICES</Link></li>
                        <li><Link to="Skills" spy={true} smooth={true} >  SKILLS</Link></li>
                        <li> <Link to="projects" spy={true} smooth={true} > PROJECTS</Link></li>
                        
                    </ul>
                </div>
                <button className="button ">
                <a target="_blank" className="link" style={{textDecoration:"none"}} href="tel:+923484605185">Contact</a>
                    
                </button>
            </div>
        </div>
        
    )
} 
export default Navbar;