import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import LogoImg from "../../img/logo.png";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <img src={LogoImg} alt="" />
      <div className="search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
