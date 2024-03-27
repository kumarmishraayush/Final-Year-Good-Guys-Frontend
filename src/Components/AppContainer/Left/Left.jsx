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
              <h6>500</h6>
              <h5 className="countFollow">Followers</h5>
            </div>

            <div className="basic-info2">
              <span>Hakim Lukka</span>
              <h5 className="countFollow">@hakkimlukka</h5>
            </div>

            <div className="basic-info3">
              <h6>500</h6>
              <h5 className="countFollow">Followning</h5>
            </div>
          </div>
          <button id="basic-info-btn">View Profile</button>
        </div>

        <div className="left-PointContainer">
          <div className="left-heading-points">
            <div className="left-point-analysis">
              <ul>
                <li>Let's Analyse the Person</li>
              </ul>
            </div>
          </div>
          <div className="person-points">
            <div className="good-points">
              <img src="good-person.png" alt="Good-Person" />
              <h5>Good Points:550</h5>
            </div>
            <div className="bad-points">
              <img src="evil-person.png" alt="Evil-Person" />
              <h5>Bad Points:500</h5>
            </div>
          </div>
        </div>
        {/* Ethics Rank In Friend */}
        <div className="left-rank"></div>
      </div>
    </>
  );
};

export default Left;
