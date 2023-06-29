import React from "react";
import { trendData } from "../data/TrendData";
import "./TrendCard.css";

const TrendCard = () => {
  return (
    <div className="trendCard">
      <h3>Trends for you</h3>
      {trendData.map((trend) => {
        return <div className="trend">
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
        </div>;
      })}
    </div>
  );
};

export default TrendCard;
