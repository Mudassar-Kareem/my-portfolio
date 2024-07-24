import React, { useEffect, useState } from 'react'
import "./Store.css";
import store1 from "./store1.png";
import store2 from "./store2.png";
import store3 from "./store3.png";
import store4 from "./store4.png";
const Store = () => {
    
   const images = [store1,store2,store3,store4];

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
      <p className="p-4 fs-5 fw-b" style={{fontWeight:"bold"}}>Mk-Store</p>
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
           </li>
        <li>
          Short Desc: <br />
          <span className="text-secondary">
            A simple landing page of a dry fruits store I created when I first started learning. Please check my GitHub profile for code.
          </span>
        </li>
      </ul>
      <div className='Button'>
        <a
          href="https://mk-store-chi.vercel.app/"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/Mudassar-Kareem/Mk-store"
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

export default Store