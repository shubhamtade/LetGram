import React from "react";
import "./Profile.css";
import ProfileLeft from "../profileLef/ProfileLeft";
import ProfileCard from "../profileCard/ProfileCard";
import PostSide from "../postSide/PostSide";
import RightSide from "../rightSide/RightSide";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileLeft />
      <div className="profile-center">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
