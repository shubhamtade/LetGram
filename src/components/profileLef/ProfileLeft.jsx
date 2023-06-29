import React from 'react';
import "./ProfileLeft.css";
import SearchBar from '../searchBar/SearchBar';
import FollowersCard from '../followersCard/FollowersCard';
import InfoCard from '../infoCard/InfoCard';

const ProfileLeft = () => {
  return (
    <div className="profileLeft">
        <SearchBar/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft