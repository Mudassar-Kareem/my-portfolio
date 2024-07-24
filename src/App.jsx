import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Tro from "./components/tro/Tro";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import  {Skills } from "./components/skills/Skills";
import Projects from "./components/project/Projects";


const App = () =>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
    return(
        <div className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
    >
          <Navbar/>
          <Tro/>
          <Services/>
          <Skills/>
          <Projects/>
          <Footer/>
          
        </div>  

        
    )
}
export default App;