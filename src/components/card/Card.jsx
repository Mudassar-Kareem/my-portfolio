import React from "react";
import "./Card.css";
 
const Card = ({icons, heading,  detail }) =>{
    return(
        <>
         <div className="card">
            <span style={{ marginTop:" 2rem"}}> {icons} </span>
             <span>{ heading }</span>
            <span>  { detail}</span>
         </div>
        </>
     
    )
}
export default Card;