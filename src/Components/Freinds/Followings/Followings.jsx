import React from 'react'
import { IoIosSearch } from "react-icons/io";
import "./Followings.css";
const Followings = () => {
  const followingData = [
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
    <div className="following-main">
      <div className="followings-search">
        <input
          className="search-following"
          placeholder="Search Your Following..."
          type="text"
        />
        <IoIosSearch className="following-search-icon" size={25} />
      </div>
      <div className="following-list">
        {followingData.map((item, index) => (
          <div key={index}>
            <div className="following-detail">
              <img src={item.Image} alt="Shakal of follower" />
              <h5>{item.Name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Followings