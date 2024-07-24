import React from 'react'
import { FaGit, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaSass } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import "./Skills.css"
import { SiSocketdotio } from "react-icons/si";
export const Skills = () => {
  return (
    <div className='skill' id='Skills' >
        <h1 >TECHNICAL SKILLS</h1>
        <div className='main'  data-aos="fade-up" data-aos-duration="500">
            <span className='icon' style={{color:"#e54d26"}}><FaHtml5 size={80}/></span>
            <span className='icon' style={{color:"#2062b0"}}><FaCss3Alt size={80}/></span>
            <span className='icon' style={{color:"#7bdfff"}}><SiTailwindcss size={80}/></span>
            <span className='icon' style={{color:"#f1d91f"}}><IoLogoJavascript size={80}/></span>
            <span className='icon' style={{color:"#5b4282"}}><BsFillBootstrapFill size={80}/></span>
            <span className='icon' style={{color:"#ce82a9"}}><FaSass size={80}/></span>
            <span className='icon' style={{color:"#f35029"}}><FaGit size={80}/></span>
            <span className='icon' style={{color:"#0dd3f7"}}><FaReact size={80}/></span>
            <span className='icon' style={{color:"#7052a0"}}><SiRedux size={80}/></span>
            <span className='icon' style={{color:"#14aa50"}}><DiMongodb size={80}/></span>
            <span className='icon' style={{color:"#14aa50"}}><FaNode size={80}/></span>
            <span className='icon' style={{color:"#3178c6"}}><SiTypescript size={80}/></span>
            <span className='icon' style={{color:"#cc3838"}}><FaNpm size={80}/></span>
            <span className='icon' style={{color:"#fdd331"}}><FaPython size={80}/></span>
            <span className='icon' style={{color:"#f34f1e"}}><FaFigma size={80}/></span>
            <span className='icon' ><SiSocketdotio size={80}/></span>
        </div>
    </div>
  )
}
