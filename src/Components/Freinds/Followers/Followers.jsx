import React from "react";
import { IoIosSearch } from "react-icons/io";
import "./Followers.css";
 

const Followers = () => {
  const followerData = [
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
    {
      Name: "Hakim Lukka",
      Image: "Mera.jpg",
    },
  ];
  return (
    <div className="followers-main">
      <div className="followers-search">
        <input
          className="search-follower"
          placeholder="Search Your Follower..."
          type="text"
        />
        <IoIosSearch className="follower-search-icon" size={25} />
      </div>
      <div className="follower-list">

        {followerData.map((item, index) => (
          <div key={index}>
            
            <div className="follower-detail">
              <img src={item.Image} alt="Shakal of follower" />
              <h5>{item.Name}</h5>
            </div>
       
          </div>
        ))}
      </div>
    </div>
  );
};

export default Followers;
