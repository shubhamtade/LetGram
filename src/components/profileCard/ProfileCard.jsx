import React from "react";
import ProfileImg from "../../img/profileImg.jpg";
import CoverImg from "../../img/cover.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="profileCard">
      <div className="profileImg">
        <img src={CoverImg} alt="Cover" />
        <img src={ProfileImg} alt="Profile" />
      </div>

      <div className="profileName">
        <span>Shubham Tade</span>
        <span>Web Developer & Graphics Designer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>254,190</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>7</span>
            <span>Following</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>

      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
