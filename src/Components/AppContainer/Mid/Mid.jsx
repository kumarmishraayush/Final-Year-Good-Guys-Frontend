import React, { useState } from "react";
import "./Mid.css";
import Story from "./Story";
import {  FcAddImage, FcVideoCall } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
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

  const handleRemoveVideo = () => {
    setSelectedVideo(null);
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
        <form style={{width :"100%"}} onSubmit={handleSubmit}>
          <div className="addPost-right">
            <div className="upper-right">
              <input
                type="text"
                placeholder="What's on your mind, hakim?"
                value={postText}
                onChange={handlePostTextChange}
                
              />
              <button type="submit" style={{border: 'none'}} className="check">Send</button>
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
              <RxCross1 onClick={handleRemoveImage}size={25} />

              <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
            </div>
          )}
          {selectedVideo && (
            <div className="selected-video" style={{marginTop:"10px"}} >
              <RxCross1 onClick={handleRemoveVideo} style={{cursor:"pointer"}} size={25} />
              <video style={{height:"200px", borderRadius:"15px", maxWidth:"300px"}} controls>
                <source  src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </form>
      </div>
      <Post />
    </>
  );
};

export default Mid;
