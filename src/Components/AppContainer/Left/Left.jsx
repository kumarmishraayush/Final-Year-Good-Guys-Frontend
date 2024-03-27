import React from "react";
 
import "./Left.css";
const Left = () => {
  return (
    <>
      <div className="left-main">
        <div className="left-profile">
          <div className="left-pic">
            <div className="left-cover">
              <img id="left-coverpic" src="Mera.jpg" alt="cover pic" />
            </div>
            <div className="profile"></div>
            <img id="left-profilepic" src="Mera.jpg" alt="" />
          </div>

          <div className="basic-info">
            <div className="basic-info1">
               
             <h6 >500</h6>
              <h5 className="countFollow">Followers</h5>
            </div>

            <div className="basic-info2">
              <span>Hakim Lukka</span>
              <h5 className="countFollow">@hakkimlukka</h5>
            </div>

            <div className="basic-info3">
            
              <h6 >500</h6>
              <h6 className="countFollow">Followning</h6>
            </div>
            
            
          </div>
              <button id="basic-info-btn">View Profile</button>
        </div>
        {/* Ethics Rank In Friend */}
        <div className="left-rank"></div>
      </div>
    </>
  );
};

export default Left;
