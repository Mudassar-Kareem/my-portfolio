import React from "react";
import "./Footer.css";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Footer = () =>{
    return(
        <div className=" footer">
           <div className="left"> 
            <IoMdMail/>
            <span>mudassarkareem916@gmail.com</span>
           </div>
           <div className="footer-icons">
          <a href="https://github.com/Mudassar-Kareem" target="_blank">
          <span> <FaGithub size={30} className="i"/> </span>
          </a>
          <a
            href="https://www.linkedin.com/in/mudassar-kareem-4874032bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
             <span > <FaLinkedin size={ 30} className="i"/> </span>
          </a>
          <a
            href="https://www.instagram.com/_mudassar_kareem?igsh=MWc4bHdzZGt0ZXk4bw=="
            target="_blank"
          >
            <span><FaInstagram size={ 30} className="i"/> </span>
          </a>
          <a
            href="https://leetcode.com/u/Mudassarkareem/"
            target="_blank"
          >
            <span><SiLeetcode size={ 30} className="i"/> </span>
          </a>
        </div>
        </div>
    )
}
export default Footer;