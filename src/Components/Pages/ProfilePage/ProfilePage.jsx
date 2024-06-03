import React, { useContext } from "react";
import { motion } from "framer-motion";
import "./ProfilePage.css";
import Left from "../../AppContainer/Left/Left";
import { ApiFetchContext } from "../../../Context/ApiFetch";
import Post from "../../AppContainer/Mid/Post";


function ProfilePage() {
  const {  userPosts } = useContext(ApiFetchContext);
  
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="profile-container" style={{ maxWidth: "1000px" }}>
        <Left />
        <div className="current-user-post" style={{ maxWidth: "700px", margin: "auto" }}>
          <Post PostData={userPosts}/>
        </div>
        
      </div>
    </motion.div>
  );
}

export default ProfilePage;
