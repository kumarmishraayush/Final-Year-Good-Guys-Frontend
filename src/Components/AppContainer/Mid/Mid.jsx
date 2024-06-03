import React, { useEffect, useState } from "react";
import "./Mid.css";
import Story from "./Story";
import {  FcAddImage, FcVideoCall } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import Post from "./Post";
import { ApiFetchContext } from "../../../Context/ApiFetch";
import axios from "axios";

const Mid = () => {
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const {setUserPosts, LoginUserInfo } = React.useContext(ApiFetchContext);
  const [AllPost,setAllPost] = useState([]);
 



  const fetchAllPost = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/v1/posts/Get-AllPost' 
      );

      console.log('Response:', response.data);  
      setAllPost(response.data.reverse()); // Reversing the array
      const filteredPosts = response.data.filter(post => post.user._id === LoginUserInfo.user._id);
      setUserPosts(filteredPosts);
      
    
      
    } catch (error) {
      console.error('Error fetching user posts:', error);
      alert('Error fetching user posts. Please check the console for details.');
      console.log('Error response:', error.response.data); // Log error response
    }
  };

 

  useEffect(() => {
    fetchAllPost();
  }, []);



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

  const handleSubmit = async(e) => {
    e.preventDefault();
   
   const postObject = {
      user : LoginUserInfo.user._id,
      postImage : selectedImage,
      description : postText,
    }

    await axios.post('http://localhost:8000/api/v1/posts/create', postObject,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }
      
    })
    .then(response => {
      console.log('Response:', response.data);  
      alert("Post Created Successfully");
    })
    .catch(error => {
      alert(error);
    });

    console.log(postObject)
    fetchAllPost();
    handleRemoveImage();
    handleRemoveVideo();
    setPostText('');

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
          <img src={LoginUserInfo.user.avatar} alt="Profile" />
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
      <Post PostData={AllPost} />
    </>
  );
};

export default Mid;
