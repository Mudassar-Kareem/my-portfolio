import React, { useState } from 'react';
import "aos/dist/aos.css";
import AOS from "aos";
import "./Projects.css";
import Store from '../projectcard/mkstore/Store';
import Fitclub from '../projectcard/fitclub/Fitclub';
import Realstate from "../projectcard/realState/Realstate"
import Todoapp from '../projectcard/Todo/Todoapp';
import Chatapp from '../projectcard/chatapp/Chatapp';
import Eco from '../projectcard/ecommerance/Eco';
import Hrflow from '../projectcard/hrflow/Hrflow';
AOS.init();

const Projects = () => {
  const items = [
    <Eco key="Ecommerance"/>,
    <Hrflow/>,
    <Chatapp key="Chatapp"/>,
    <Todoapp key="todoapp"/>,
    <Fitclub key="fitclub1" />,
    <Store key="store" />,
    <Realstate key="RealState"/>,
    
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <div id='projects' className="project">
      <h1 style={{ display: "flex", justifyContent: "center", color: "red", fontSize: "2rem", fontWeight: "bold" }}>PROJECTS</h1>
      <div className='grid'>
        {items.slice(0, visibleCount)}
      </div>
      {visibleCount < items.length && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button 
            onClick={handleShowMore}
            className='button'
            style={{marginBottom:"3rem"}}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
