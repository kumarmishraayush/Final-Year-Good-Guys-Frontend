import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Hero.jsx";
import Login from "./Components/Pages/LoginPage/Login.jsx";
import Register from "./Components/Pages/RegisterPage/Register.jsx";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage.jsx";
import Message from "./Components/Pages/MessagePage/Message.jsx";
import Notification from "./Components/Pages/NotificationPage/Notification.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/message" element={<Message/>} />
          <Route path="/notification" element={<Notification/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
