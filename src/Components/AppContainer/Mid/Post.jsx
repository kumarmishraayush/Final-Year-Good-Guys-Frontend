import React,{useState, useContext}  from "react";
import "./Post.css";
import { SlUserFollow } from "react-icons/sl";
import { SlOptionsVertical } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import { RiUserFollowLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { DarkModeContext } from "../../../Context/DarkModeContext";
import { FaHeartBroken } from "react-icons/fa";
 
const Post = () => {

  const { isDarkMode } = useContext(DarkModeContext);
  const PostData = [
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
    {
      storyOwner: "ProfilePic.jpg",
      Name: "Hakim Lukka",
      UserId: "@hakimlukka",
    },
  ];
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false); // Dislike should be toggled off if liking
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false); // Like should be toggled off if disliking
  };
  const [IsPostOption, setIsPostOption] = useState(false);

  // Function to handle toggling
  const handleToggle = () => {
    setIsPostOption(!IsPostOption); // Toggle the state
  };

  
    const [isUserAdded, setIsUserAdded] = useState(false);
  
    const handleFriend = () => {
      setIsUserAdded(!isUserAdded);
    };

  return (
    <div className="post-main">
    <div className="postCard-main">
      <div className="post-upper">
        <div className="post-upper-left">
          <img src="ProfilePic.jpg " alt="ProfilePic" />
        </div>
        <div className="post-upper-right">
          <div className="userNameOnPost">Hakim Lukka</div>
          <div className="UserIdOnPost">@hakumlukka</div>
          <div className="timeOnPost">10h ago</div>
        </div>
        <div className="post-upper-right2">
          {IsPostOption ? (
             <RxCross2 size={20} color={isDarkMode ? "white" : "black"} onClick={handleToggle} />
          ):(<SlOptionsVertical size={20} color={isDarkMode ? "white" : "black"} onClick={handleToggle}  />)}
         { IsPostOption &&(
          <ul>
            <li>Edit Post</li>
            <li>Delete Post</li>
          </ul>
       ) }

       {isUserAdded ? (
          <RiUserFollowLine size={20} color={isDarkMode ? "white" : "black"} onClick={handleFriend}  />
       ):(<SlUserFollow size={20} color={isDarkMode ? "white" : "black"} onClick={handleFriend} />)}
          </div>

      </div>

      <div className="post-mid">
        <div className="post-mid-text">{PostData[0].Name} hee kah adfhkjadhs kjasdfhj asdkhf de</div>
        <img src="Mera.jpg" className="post-image" alt="ProfilePic" />
      </div>
      
      <div className="post-lower" style={{color:"gray"}}>
        <div className="post-lower-like">{!liked ? (<BiSolidLike size={25} onClick={handleLike} color={isDarkMode ? "white" : "black"} />):(<FaHeart size={25} onClick={handleLike} color="red" />)}25</div>
        <div className="post-lower-comment"><LiaCommentDotsSolid color={isDarkMode ? "white" : "black"} size={25}  />25</div>
        <div className="post-lower-dislike">{disliked ? (<FaHeartBroken size={25} onClick={handleDislike} color="red" />):(<BiSolidDislike onClick={handleDislike} color={isDarkMode ? "white" : "black"} size={25}  />)}25</div>
      </div>
      <hr style={{margin:"auto", width:"80%", marginTop:"10px",   backgroundColor:"var(--color-text-secondary),borderTop: '1px solid #000'"}}/>
      <div className="post-addComment">
        <img src="ProfilePic.jpg" alt="ProfilePic" />
        <input type="text" placeholder="Add a comment" />
        <div className="comment-send">Send</div>
        </div>
    
    </div>
    </div>
  );
};

export default Post;
