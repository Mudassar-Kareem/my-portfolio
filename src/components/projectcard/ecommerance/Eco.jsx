import React, { useEffect, useState } from 'react'
import { FaSass } from "react-icons/fa";
import img1 from "./Eco1.png"
import img2 from "./Eco2.png"
import img3 from "./Eco3.png"
import img4 from "./Eco4.png"
import { SiTypescript } from "react-icons/si";
const Eco = () => {
    const images = [img1,img2,img3,img4];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000); 
    
      return () => clearInterval(interval);
    }, [images.length]);
   return (
     <div className="car" data-aos="fade-left" data-aos-duration="500">
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
       <p className="p-4 fs-5 fw-b" style={{fontWeight:"bold"}}>Ecommerance Website</p>
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
           <i
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-react"
             style={{ color: "#61dafb" }}
           ></i>
           +
           <FaSass
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-node"
             style={{ color: "#ce82a9" }}
           />
           +
           <SiTypescript
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-node"
             style={{ color: "#3178c6" }}
           />
            +
            <i
             data-aos="fade-up"
             data-aos-duration="500"
             className="fa-brands fa-node"
             style={{ color: "#14aa50" }}
           ></i>
           
         </li>
         <li>
           Short Desc: <br />
           <span className="text-secondary">
           A Mern Ecommerance Website  with Admin Dashboard. Please check my GitHub profile for code 
           </span>
         </li>
       </ul>
       <div className='Button'>
         {/* <a
           href="https://github.com/Mudassar-Kareem/todo-app-server"
           className="btn"
           target="_blank"
           rel="noopener noreferrer"
         >
           Live Demo
         </a> */}
         <a
           href="https://github.com/Mudassar-Kareem/Mern-Ecommerance"
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

export default Eco