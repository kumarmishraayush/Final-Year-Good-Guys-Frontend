import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Hero.jsx";
import Login from "./Components/Pages/LoginPage/Login.jsx";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage.jsx";
import Message from "./Components/Pages/MessagePage/Message.jsx";
import Notification from "./Components/Pages/NotificationPage/Notification.jsx";
import MessageBox from "./Components/Pages/MessagePage/MessageBox.jsx";
import RegistrationForm from "./Components/Pages/RegisterPage/RegistrationForm.jsx";
import { ApiFetchContext } from "./Context/ApiFetch.js";
import BillBoard from "./Components/Pages/Bill Board/BillBoard.jsx";

const App = () => {
  const { accessToken } = React.useContext(ApiFetchContext);

  return (
    <BrowserRouter>
      <div className="app-main">
        <Navbar />
        <Routes>
          {!accessToken ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/billboard" element={<BillBoard />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Hero />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/message" element={<Message />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/messagebox" element={<MessageBox />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
