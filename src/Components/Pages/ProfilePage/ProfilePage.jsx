import React from "react";
import { motion } from "framer-motion";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <>
      <motion.div
        initial={{ x: -1000 }} // Initial position outside the viewport
        animate={{ x: 0 }} // Move to x=0 (center of the viewport)
        transition={{ duration: 0.5 }} // Animation duration
        style={{ width: "100%", height: "100%" }}
      >
        
      </motion.div>
    </>
  );
}

export default ProfilePage;
