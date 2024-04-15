import React  from "react";
import "./Post.css";
import { SlUserFollow } from "react-icons/sl";
import { SlOptionsVertical } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { LiaCommentDotsSolid } from "react-icons/lia";

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
        <div className="post-mid-text">Attitude is everything; it's the lens through which I see the world
I may not be perfect, but my attitude is impeccable
I'm not trying to be everyone's cup of tea. I'm my own double-shot espresso
I'm not chasing anyone; I'm too busy chasing my dreams{PostData[0].Name}
My attitude is the weapon that takes me places</div>
      </div>
      <hr style={{margin:"auto", width:"80%", marginTop:"10px",   backgroundColor:"var(--color-text-secondary),borderTop: '1px solid #000'"}}/>
      <div className="post-lower">
        <div className="post-lower-like"><BiSolidLike size={30}  />25</div>
        <div className="post-lower-comment"><LiaCommentDotsSolid  size={30}  />25</div>
        <div className="post-lower-dislike"><BiSolidDislike size={30}  />25</div>
      </div>
    </div>
    </div>
  );
};

export default Post;
