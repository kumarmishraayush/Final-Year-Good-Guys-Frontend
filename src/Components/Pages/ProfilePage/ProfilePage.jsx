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
         <div className="profile-container">
      <div className="profile-header">
        <div className="cover-pic"></div>
        <div className="profile-info">
          <div className="profile-pic"></div>
          <div className="user-details">
            <div className="profile-sub-info">
              <div className="names">
                <h1 className="full-name">Full Name</h1>
                <p className="user-name">@username</p>
              </div>
              <div className="follows">
                <p id="followers">1000 followers</p>
                <p id="following">1 following</p>
              </div>
            </div>
            <div className="buttons">
              <button className="story-button">Add to Story</button>
              <button className="edit-profile-button">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <div className="left-section">
          {/* Social status, leaderboard ranking, served people in the last week, and total */}
        </div>
        <div className="right-section">
          {/* Scrollable timeline with post options */}
          <div className="post-options">
            <textarea placeholder="Write a caption..."></textarea>
            <input type="file" accept="image/*, video/*" id="fileInput" />
            <button >Post</button>
          </div>
          <div className="timeline">
            {/* Timeline posts */}
          </div>
        </div>
      </div>
    </div>
      </motion.div>
    </>
  );
}

export default ProfilePage;
