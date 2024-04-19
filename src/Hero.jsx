import React from "react";
import "./App.css"
import Left from "./Components/AppContainer/Left/Left.jsx"
import Mid from "./Components/AppContainer/Mid/Mid.jsx"
import Right from "./Components/AppContainer/Right/Right.jsx"
import { motion } from "framer-motion";

 
const Hero = () => {
  return (
    <>
      
      
      <motion.div 
       initial={{ x: -1000 }} // Initial position outside the viewport
       animate={{ x: 0 }} // Move to x=0 (center of the viewport)
       transition={{ duration: .5 }} // Animation duration
       style={{ width: "100%", height: "100%" }}
       className="app-container">
        <div className="app-left"><Left/></div>
        <div className="app-mid"><Mid/></div>
        <div className="app-right"><Right/></div>
      </motion.div>
    
    </>
  );
};

export default Hero;
