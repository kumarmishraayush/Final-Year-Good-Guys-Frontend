import React from "react";
import "./App.css"
import Left from "./Components/AppContainer/Left/Left.jsx"
import Mid from "./Components/AppContainer/Mid/Mid.jsx"
import Right from "./Components/AppContainer/Right/Right.jsx"

import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="app-main">
        <Navbar />
      </div>
      
      <div className="app-container">
        <div className="app-left"><Left/></div>
        <div className="app-mid"><Mid/></div>
        <div className="app-right"><Right/></div>
      </div>
    </>
  );
};

export default App;
