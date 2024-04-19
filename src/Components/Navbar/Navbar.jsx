import React, { useEffect, useState, useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { BiSolidMessageEdit } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { DarkModeContext } from "../../Context/DarkModeContext";
import "./Navbar.css";
import {  Link } from "react-router-dom";
const Navbar = () => {
  const [Home, setHome] = useState(false);
  const [Notification, setNotification] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [Message, setMessage] = useState(false);
  const [isDark, setisDark] = useState(false);
  const [theme, settheme] = useState("light-theme");
  const [iconDefault, seticonDefault] = useState("black");
  const [iconColor, seticonColor] = useState("gray");

  const {toggleDarkMode} = useContext(DarkModeContext);
  const themeChange = () => {
    if (theme === "dark-theme") {
      settheme("light-theme");
    } else {
      settheme("dark-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const darkMode = () => {
    setisDark(!isDark);
    if (isDark !== false) {
      themeChange();
      seticonColor("gray");
      seticonDefault("black");
    } else {
      seticonDefault("#f0f0f0");
      seticonColor("#FFFB73");
      themeChange();
    }
  };
  const home = () => {
    setHome(!Home);
    setMessage(false);
    setNotification(false);
    setIsDropdownOpen(false);
  };
  const message = () => {
    setMessage(!Message);
    setHome(false);
    setNotification(false);
    setIsDropdownOpen(false);
  };
  const notification = () => {
    setNotification(!Notification);
    setHome(false);
    setMessage(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const hi = () => {
    setNotification(false);
    setHome(false);
    setMessage(false);
    setIsDropdownOpen(false);
  };
  return (
    <>
      <div className="navbar-main">
        <div className="navbar-left">
          <img src="Good Guys.png" alt="" />
          <h3 style={{ color:!isDark ? "black" : "#f0f0f0"}}>Good Guys</h3>
        </div>
        <div className="navbar-mid">
          <input type="text" placeholder="Search..." />
          <IoIosSearch color={ isDark?("#A9A9A9"):("black")} size={23} id="search-icon" />
        </div>
        <div className="navbar-right">
          <Link to="/home">
          <FaHome
            onClick={home}
            className={Home ? "active" : ""}
            size={25}
            color={Home ? iconColor : iconDefault}
            />
            </Link>

            <Link to="/message">
          <BiSolidMessageEdit
            onClick={message}
            className={Message ? "active" : ""}
            size={25}
            color={Message ? iconColor : iconDefault}
            />
            </Link>

          <Link to="/notification">
          <IoNotificationsCircleSharp
            onClick={notification}
            className={Notification ? "active" : ""}
            size={25}
            color={Notification ? iconColor : iconDefault}
            />
            </Link>
          <div className="arrows">
            <img
              src="ProfilePic.jpg"
              alt="profile pic bhai"
              onClick={toggleDropdown}
            />
            {isDropdownOpen ? (
              <FaChevronUp
                color={!isDark ? "gray" : "#f0f0f0"}
                className="arrow"
                onClick={toggleDropdown}
              />
            ) : (
              <FaChevronDown
                color={!isDark ? "gray" : "#f0f0f0"}
                className="arrow"
                onClick={toggleDropdown}
              />
            )}
          </div>
          {isDropdownOpen && (
            <div className="dropdown">
              {/* Dropdown content */}
              <ul>
                <Link style={{ textDecoration: "none" }} to ="/profile">
                <li  onClick={hi}>View Profile Pic</li>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/">
                <li  onClick={hi} >Logout</li>
                </Link>
                <li  onClick={() => { darkMode(); toggleDarkMode(); }}>
                  {!isDark ? <MdDarkMode size={25} /> : <CiLight size={25} />}
                </li>
                 
                <li onClick={hi}>Setting</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
