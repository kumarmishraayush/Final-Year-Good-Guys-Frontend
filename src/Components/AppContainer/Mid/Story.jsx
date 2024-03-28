import React from "react";
import "./Story.css"
const Story = () => {
  const data = [
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
    {
      storyOwner: "ProfilePic.jpg",
      storyPost: "Mera.jpg",
    },
  ];

  return (
    <div className="story-main">
        {data.map((item, index) => (
          <div key={index}>
            {" "}
            {/* Adding a unique key for each item */}
            <div className="story-card">
            <img
              className="story-ownerIMG"
              src={item.storyOwner}
              alt="story owner"
            />
            <img
              className="story-postIMG"
              src={item.storyPost}
              alt="story-post"
            />
      </div>
          </div>
        ))}
    </div>
  );
};

export default Story;
