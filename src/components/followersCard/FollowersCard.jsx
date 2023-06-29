import React from "react";
import "./FollowersCard.css";
import { followers } from "../data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>Who is following you</h3>
      {followers.map((follower, id) => {
        return <div className="follower">
            <div>
                <img src={follower.image} alt="" 
                className="followerImg"/>
                <div className="name">
                  <span>{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
            </div>
            <button className="button fCard-btn">Follow</button>
        </div>;
      })}
    </div>
  );
};

export default FollowersCard;