import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import './StoryView.css';

function StoryView({ toggleStory }) {
  return (
    <>
    <div className="storyview-main ">
         <div className="container">
      <div className="line"></div>
    </div>
      <div className="storyview-header">
        <span className="storyview-userInfo">
          <img src="ProfilePic.jpg" alt="profile pic" className="storyview-profilePic" />
          <p className="storyview-username">Username</p>
        </span>
        <RxCross1 size={40} className='storyview-close' onClick={toggleStory} />
      </div>
      <div className="storyview-body">
        <img src="Mera.jpg" alt="story"   />
      </div>
    </div>
    </>
  );
}

export default StoryView;
