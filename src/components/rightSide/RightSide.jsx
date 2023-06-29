import React, { useState } from "react";
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import "./RightSide.css";
import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="rightSide">
      <div className="navIcons">
        <img src={Home} alt=""  style={{color:"var(--buttonBg)"}}/>
        <UilSetting />
        <img src={Notification} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard/>

      <button className="button rightBtn"  onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  );
};

export default RightSide;
