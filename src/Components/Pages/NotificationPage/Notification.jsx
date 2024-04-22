import React from "react";
import { motion } from "framer-motion";
import "./Notification.css";
function Notification() {
  const notification = [
    {
      image: "ProfilePic.jpg",
      id: 1,
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      time: "10:30 AM",
    },
    {
      image: "Mera.jpg",
      id: 2,
      name: "Jane Smith",
      message:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      time: "11:15 AM",
    },
    {
      image: "Plus.png",
      id: 3,
      name: "Bob Johnson",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      time: "Yesterday",
    },
    {
      image: "ProfilePic.jpg",
      id: 4,
      name: "Emily Davis",
      message:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      time: "Yesterday",
    },
    {
      image: "ProfilePic.jpg",
      id: 5,
      name: "Michael Brown",
      message: "Et harum quidem rerum facilis est et expedita distinctio.",
      time: "Yesterday",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ x: -1000 }} // Initial position outside the viewport
        animate={{ x: 0 }} // Move to x=0 (center of the viewport)
        transition={{ duration: 0.5 }} // Animation duration
        style={{ width: "100%", height: "100%" }}
      >
        {notification.map((notification) => (
          <motion.div
          initial={{ x: -1000 }} // Initial position outside the viewport
        animate={{ x: 0 }} // Move to x=0 (center of the viewport)
        transition={{ duration: 0.5 }} // Animation duration
         
           key={notification.id} className="notification-main">
            <div className="notification-image">
              <img src={notification.image} alt="notification" />
              <h6>{notification.name}</h6>
            </div>
            <div className="notification-message">
              <p>{notification.message}</p>
            </div>
            <div className="notification-time">
              <h6>{notification.time}</h6>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default Notification;
