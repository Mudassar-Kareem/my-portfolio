import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import Card from "../card/Card";
import {motion} from "framer-motion";
import cv from "./Cv.png";
const Services = () =>{
  const transition = {duration:1, type: "spring"};
    return(
        <>
       <div className="services" id="Services">
            <div className="awesome">
                <span>My Awesome</span>
                <span> Services</span>
                <span> I am  specializes in building modern web applications using the MERN stack,
                      <br />
                      which includes MongoDB, Express.js, React.js, and Node.js.</span>
                      <a href={cv} download="My_CV.png">
          <button className="button s-btn">Download CV</button>
        </a>
            </div>

            <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          
        >
          <Card
            icons={<FaReact size={40}/>}
            heading={"Frontend Development"}
            detail={"Building responsive and interactive user interfaces with React.js, ensuring a smooth user experience across all devices."}
          />
        </motion.div>
        
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            icons={<FaCode size={40}/>}
            heading={"Backend Development"}
            detail={"Developing RESTful APIs with Node.js and Express.js to handle client requests efficiently."}
          />
        </motion.div>
       
      
        </div>
       </div>
       </>
    )
}
export default Services;