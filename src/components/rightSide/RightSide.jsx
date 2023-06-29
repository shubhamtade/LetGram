import React from "react";
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import "./RightSide.css";
import TrendCard from "../trendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Notification} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard/>

      <button className="button rightBtn">
        Share
      </button>
    </div>
  );
};

export default RightSide;
