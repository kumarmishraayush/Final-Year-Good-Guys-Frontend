import React, { useEffect, useState } from "react";
import "./Story.css";
import { IoIosAddCircle } from "react-icons/io";
import StoryView from "../StoryView/StoryView";
import { ApiFetchContext } from "../../../Context/ApiFetch";

const Story = () => {
  const { LoginUserInfo } = React.useContext(ApiFetchContext);
  const data = [
    { storyOwner: "ProfilePic.jpg", storyPost: "Ankit img.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Ankur Sharma.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Good Guys.png" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Good Guys.png" },
    { storyOwner: "ProfilePic.jpg", storyPost: "ProfilePic.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Good Guys.png" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Ankur Sharma.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Good Guys.png" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Ankit img.jpg" },
  ];

  const [showStory, setShowStory] = useState(false);

  const toggleStory = () => {
    setShowStory((prevShowStory) => !prevShowStory);

    // Clear previous timeout when toggling
    clearTimeout(delay);
    
    // Set a new timeout to reset showStory after 3 seconds if it's true
    if (!showStory) {
      setDelay(setTimeout(() => {
        setShowStory(false);
      }, 15000));
    }
  };

  const [delay, setDelay] = useState(null);

  useEffect(() => {
    // Clean up the timeout when component unmounts or showStory changes
    return () => {
      clearTimeout(delay);
    };
  }, [delay]); // Run effect when delay changes

  return (
    <>
      <div className="story-main">
        <div className="story-owner">
          <img src={LoginUserInfo.user.avatar} className="story-profilePic" alt="Add story" />
          
          <IoIosAddCircle color="GRAY" size={25} className="add-story-logo" />
        </div>

        {data.map((item, index) => (
          <div>
          {showStory && <StoryView toggleStory={toggleStory} />}
          <div key={index} className="story-image">
            <img src={item.storyPost} alt="stories" onClick={toggleStory} />
          </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Story;
