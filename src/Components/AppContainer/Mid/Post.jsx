import React, { useState, useContext } from "react";
import "./Post.css";
import { SlUserFollow, SlOptionsVertical } from "react-icons/sl";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { RiUserFollowLine } from "react-icons/ri";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { DarkModeContext } from "../../../Context/DarkModeContext";
import { ApiFetchContext } from "../../../Context/ApiFetch";
import axios from "axios";

const Post = ({ PostData }) => {
  const { LoginUserInfo } = useContext(ApiFetchContext);
  const { isDarkMode } = useContext(DarkModeContext);

  const [likedPosts, setLikedPosts] = useState({});
  const [dislikedPosts, setDislikedPosts] = useState({});

  const handleLike = async (postId) => {
    setLikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
    if (dislikedPosts[postId]) {
      setDislikedPosts((prev) => ({ ...prev, [postId]: false }));
    }

    try {
      const url = likedPosts[postId]
        ? "http://localhost:8000/api/v1/likes/unlike"
        : "http://localhost:8000/api/v1/likes/like";

      const response = await axios.post(
        url,
        {
          postId: postId,
          userId: LoginUserInfo.user._id,
        }
      );

      console.log(`${likedPosts[postId] ? "Unlike" : "Like"} post response:`, response.data);
    } catch (error) {
      console.error(`Error ${likedPosts[postId] ? "unliking" : "liking"} post:`, error);
      throw error;
    }
  };

  const handleDislike = async (postId) => {
    setDislikedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
    if (likedPosts[postId]) {
      setLikedPosts((prev) => ({ ...prev, [postId]: false }));
    }

    try {
      const url = dislikedPosts[postId]
        ? "http://localhost:8000/api/v1/likes/unlike"
        : "http://localhost:8000/api/v1/likes/like";

      const response = await axios.post(
        url,
        {
          postId: postId,
          userId: LoginUserInfo.user._id,
        }
      );

      console.log(`${dislikedPosts[postId] ? "Undislike" : "Dislike"} post response:`, response.data);
    } catch (error) {
      console.error(`Error ${dislikedPosts[postId] ? "undisliking" : "disliking"} post:`, error);
      throw error;
    }
  };

  const [IsPostOption, setIsPostOption] = useState(false);

  const handleToggle = () => {
    setIsPostOption(!IsPostOption);
  };

  const [isUserAdded, setIsUserAdded] = useState(false);

  const handleFriend = async (postOwner) => {
    setIsUserAdded(!isUserAdded);
    const url = isUserAdded
      ? "http://localhost:8000/api/v1/users/unfollow-user"
      : "http://localhost:8000/api/v1/users/follow-user";

    try {
      const response = await axios.post(
        url,
        {
          userId: LoginUserInfo.user._id,
          friendId: postOwner,
        }
      );

      console.log(
        `${isUserAdded ? "Unfollow" : "Follow"} user response:`,
        response.data
      );
      return response.data;
    } catch (error) {
      console.error(`Error ${isUserAdded ? "unfollowing" : "following"} user:`, error);
      throw error;
    }
  };

  const calculateTimeAgo = (timestamp) => {
    const currentTime = new Date();
    const postTime = new Date(timestamp);
    const timeDifference = Math.floor((currentTime - postTime) / (1000 * 60 * 60));

    if (timeDifference < 24) {
      return `${timeDifference}h ago`;
    } else {
      return `${Math.floor(timeDifference / 24)}d ago`;
    }
  };

  return (
    <>
      {PostData.map((data) => (
        <div className="post-main" key={data._id}>
          <div className="postCard-main">
            <div className="post-upper">
              <div className="post-upper-left">
                <img src={data.user.avatar} alt="ProfilePic" />
              </div>
              <div className="post-upper-right">
                <div className="userNameOnPost">{data.user.fullName}</div>
                <div className="UserIdOnPost">{data.user.username}</div>
                <div className="timeOnPost">{calculateTimeAgo(data.createdAt)}</div>
              </div>
              <div className="post-upper-right2">
                {IsPostOption ? (
                  <RxCross2
                    size={20}
                    color={isDarkMode ? "white" : "black"}
                    onClick={handleToggle}
                  />
                ) : (
                  <SlOptionsVertical
                    size={20}
                    color={isDarkMode ? "white" : "black"}
                    onClick={handleToggle}
                  />
                )}
                {IsPostOption && (
                  <ul>
                    <li>Edit Post</li>
                    <li>Delete Post</li>
                  </ul>
                )}

                {isUserAdded ? (
                  <RiUserFollowLine
                    size={20}
                    color={isDarkMode ? "white" : "black"}
                    onClick={() => handleFriend(data.user._id)}
                  />
                ) : (
                  <SlUserFollow
                    size={20}
                    color={isDarkMode ? "white" : "black"}
                    onClick={() => handleFriend(data.user._id)}
                  />
                )}
              </div>
            </div>

            <div className="post-mid">
              <div className="post-mid-text">{data.description}</div>
              <img
                src={data.postImage ? data.postImage : "Good Guys text.jpg"}
                className="post-image"
                alt="ProfilePic"
              />
            </div>

            <div className="post-lower" style={{ color: "gray" }}>
              <div className="post-lower-like">
                {!likedPosts[data._id] ? (
                  <BiSolidLike
                    size={25}
                    onClick={() => handleLike(data._id)}
                    color={isDarkMode ? "white" : "black"}
                  />
                ) : (
                  <FaHeart size={25} onClick={() => handleLike(data._id)} color="red" />
                )}
                {data.likes.length + (likedPosts[data._id] ? 1 : 0) - (dislikedPosts[data._id] ? 1 : 0)}
              </div>
              <div className="post-lower-comment">
                <LiaCommentDotsSolid
                  color={isDarkMode ? "white" : "black"}
                  size={25}
                />
                {data.comments.length}
              </div>
              <div className="post-lower-dislike">
                {dislikedPosts[data._id] ? (
                  <FaHeartBroken
                    size={25}
                    onClick={() => handleDislike(data._id)}
                    color="red"
                  />
                ) : (
                  <BiSolidDislike
                    onClick={() => handleDislike(data._id)}
                    color={isDarkMode ? "white" : "black"}
                    size={25}
                  />
                )}
                {data.dislikes.length + (dislikedPosts[data._id] ? 1 : 0) - (likedPosts[data._id] ? 1 : 0)}
              </div>
            </div>
            <hr
              style={{
                margin: "auto",
                width: "80%",
                marginTop: "10px",
                backgroundColor:
                  "var(--color-text-secondary),borderTop: '1px solid #000'",
              }}
            />
            <div className="post-addComment">
              <img src={LoginUserInfo.user.avatar} alt="ProfilePic" />
              <input type="text" placeholder="Add a comment" />
              <div className="comment-send">Send</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
