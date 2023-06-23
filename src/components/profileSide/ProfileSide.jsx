import React from 'react'
import SearchBar from "../searchBar/SearchBar"
import ProfileCard from '../profileCard/ProfileCard';
import "./ProfileSide.css";
import FollowersCard from '../followersCard/FollowersCard';


const ProfileSide = () => {
  return (
    <div className="profileSide">
      <SearchBar/>
      <ProfileCard/>
      <FollowersCard/>
    </div>
  )
}

export default ProfileSide