import React from "react";
import "./Mid.css";
import Story from "./Story";
import { FcCompactCamera } from "react-icons/fc";
import { FcAddImage } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
 
const Mid = () => {
  return (
    <>
      <div className="mid-main">
        <Story />
      </div>

      <div className="mid-addPost">
        <div className="addPost-left">
          <img src="ProfilePic.jpg" alt="" />
        </div>
        <div className="addPost-right">
          <div className="upper-right">
            <input type="text" placeholder="What's on your mind, hakim ?" />
            <FcOk size={25} className="check" />
          </div>
          <div className="lower-right">
            <div className="camera">
              <FcCompactCamera size={30} />
              <h5>Camera</h5>
            </div>
            <div className="add-image">
              {" "}
              <FcAddImage size={30} />
              <h5>Image</h5>
            </div>
            <div className="add-video">
              <FcVideoCall size={30} />
              <h5>Video</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mid;
