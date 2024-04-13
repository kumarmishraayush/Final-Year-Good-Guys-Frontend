import React from "react";
import "./Story.css";
import { IoIosAddCircle } from "react-icons/io";
const Story = () => {
  const data = [
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
    { storyOwner: "ProfilePic.jpg", storyPost: "Mera.jpg" },
  ];

  return (
    <>
      <div className="story-main">
        <div className="story-owner">
          <img src="ProfilePic.jpg" alt="Add story" />
          <IoIosAddCircle color="GRAY" size={25} className="add-story-logo" />
        </div>

        {data.map((item, index) => (
          <div key={index} className="story-image">
            <img src={item.storyPost} alt="stories" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Story;
