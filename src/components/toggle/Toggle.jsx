// import React from "react";
// import "./Toggle.css";
// import Sun from "@iconscout/react-unicons/icons/uil-sun";
// import Moon from "@iconscout/react-unicons/icons/uil-moon";



// const Toggle = () =>{

//     return(
//         <div className="toggle">
//             <Moon/>
//             <Sun/>
//             <div className="t-btn"></div>
            
//         </div>

//     )
// }
// export default Toggle;

import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      {/*                              toggle.css mein left ki property aik assign hy ussy delete
                                          krna hy pehly */}
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;