import React, { useState } from "react";
import "./Mid.css";
import Story from "./Story";
import { FcCompactCamera, FcAddImage, FcVideoCall } from "react-icons/fc";
import Post from "./Post";

const Mid = () => {
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setSelectedVideo(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your post submission logic here
    console.log('Post Text:', postText);
    console.log('Selected Image:', selectedImage);
    console.log('Selected Video:', selectedVideo);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="mid-main">
        <Story />
      </div>

      <div className="mid-addPost">
        <div className="addPost-left">
          <img src="ProfilePic.jpg" alt="Profile" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="addPost-right">
            <div className="upper-right">
              <input
                type="text"
                placeholder="What's on your mind, hakim?"
                value={postText}
                onChange={handlePostTextChange}
              />
              <button type="submit" className="check">Send</button>
            </div>
            <div className="lower-right">
              <label htmlFor="imageUpload" className="add-image">
                <FcAddImage size={30} />
                <h5>Photos</h5>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </label>
              <div className="add-image">
                <FcCompactCamera size={30} />
                <h5>Camera</h5>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </div>
              <label htmlFor="videoUpload" className="add-video">
                <FcVideoCall size={30} />
                <h5>Video</h5>
                <input
                  type="file"
                  id="videoUpload"
                  accept="video/*"
                  style={{ display: 'none' }}
                  onChange={handleVideoUpload}
                />
              </label>
            </div>
          </div>
        {selectedImage && (
          <div className="selected-image" onClick={handleRemoveImage}>
            <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
          </div>
        )}
        </form>
      </div>
      <Post />
    </>
  );
};

export default Mid;
