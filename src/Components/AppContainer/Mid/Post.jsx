import React  from "react";
import "./Post.css";
import { SlUserFollow } from "react-icons/sl";
import { SlOptionsVertical } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { LiaCommentDotsSolid } from "react-icons/lia";
import { CiFaceSmile } from "react-icons/ci";


const Post = () => {
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
        <SlOptionsVertical size={20} />
        <SlUserFollow size={20} />
          </div>

      </div>

      <div className="post-mid">
        <img src="Mera.jpg" className="post-image" alt="ProfilePic" />
        <div className="post-mid-text">{PostData[0].Name} hee kah de</div>
      </div>
      
      <div className="post-lower">
        <div className="post-lower-like"><BiSolidLike size={25}  />25</div>
        <div className="post-lower-comment"><LiaCommentDotsSolid  size={25}  />25</div>
        <div className="post-lower-dislike"><BiSolidDislike size={25}  />25</div>
      </div>
      <hr style={{margin:"auto", width:"80%", marginTop:"10px",   backgroundColor:"var(--color-text-secondary),borderTop: '1px solid #000'"}}/>
      <div className="post-addComment">
        <img src="ProfilePic.jpg" alt="ProfilePic" />
        <input type="text" placeholder="Add a comment" />
        <CiFaceSmile size={25} className="comment-smile"/>
        </div>
    
    </div>
    </div>
  );
};

export default Post;
