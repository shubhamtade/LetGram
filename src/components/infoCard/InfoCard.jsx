import React, { useState } from "react";
import { UilPen } from "@iconscout/react-unicons";
import "./InfoCard.css";
import ProfileEditModal from "../profileEditModal/ProfileEditModal";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="infoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileEditModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Delhi, IN</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Microsoft</span>
      </div>

      <button className="button lgBtn">Logout</button>
    </div>
  );
};

export default InfoCard;
