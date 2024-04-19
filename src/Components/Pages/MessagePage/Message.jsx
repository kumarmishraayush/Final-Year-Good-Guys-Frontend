import React from "react";
import { motion } from "framer-motion";
import Followers from "../../Freinds/Followers/Followers";
import Followings from "../../Freinds/Followings/Followings";
import MessageBox from "./MessageBox";
import "./Message.css"
function Message() {
  return (
    <>
      <motion.div
        initial={{ x: -1000 }} // Initial position outside the viewport
        animate={{ x: 0 }} // Move to x=0 (center of the viewport)
        transition={{ duration: 0.5 }} // Animation duration
        style={{ width: "100%", height: "100%" }}
      >
        <div className="message-main">
          <div className="message-left">
            <Followers />
            <Followings />
          </div>
          <div className="message-right">
            <MessageBox/>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Message;
