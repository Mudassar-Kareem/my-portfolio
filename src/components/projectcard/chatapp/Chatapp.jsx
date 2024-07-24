import React, { useEffect, useState } from 'react'
import img1 from "./chat1.png"
import img2 from "./chat2.png"
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { SiSocketdotio } from "react-icons/si";
const Chatapp = () => {
    const images = [img1,img2];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000); 
    
      return () => clearInterval(interval);
    }, [images.length]);
   return (
     <div className="car" data-aos="fade-right" data-aos-duration="500">
     <div className='slider-container'>
     {images.map((image, index) => (
       <img
         key={index}
         src={image}
         alt={`Slide ${index}`}
         className={`slider-image ${index === currentIndex ? 'active' : ''}`}
       />
     ))}
   </div>
       <p className="p-4 fs-5 fw-b" style={{fontWeight:"bold"}}>Chat App</p>
       <ul className="fs-5" style={{ marginBottom:"3rem"}}>
         <li>100% Responsive Layout</li>
         <li>
           BUILT WITH =
           <i
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-html5"
             style={{ color: "#e54d26" }}
           ></i>
           +
           <i
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-css3"
             style={{color: "#2062b0" }}
           ></i>
           +
          
           
            <IoLogoJavascript
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-node"
             style={{ color: "#f1d91f" }}
           />
           +
           <i
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-node"
             style={{ color: "#14aa50" }}
           ></i>
           
           +
           <SiSocketdotio
             data-aos="fade-up"
             data-aos-duration="500"
           />
           
         </li>
         <li>
           Short Desc: <br />
           <span className="text-secondary">
           A  Real Time chat app in which you can send message change the user name . Please check my GitHub profile for code 😊
           </span>
         </li>
       </ul>
       <div className='Button'>
         <a
           href=""
           className="btn"
           target="_blank"
           rel="noopener noreferrer"
         >
           Live Demo
         </a>
         <a
           href="https://github.com/Mudassar-Kareem/chat-app"
           className="btn"
           target="_blank"
           rel="noopener noreferrer"
         >
           View Code
         </a>
       </div>
     </div>
 
   )
}

export default Chatapp