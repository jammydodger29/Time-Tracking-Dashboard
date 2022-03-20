import React from 'react';
import ProfileImage from './images/image-jeremy.png';
import './Profile.css'


function Profile() {
  return (
    <div id="profile-container">
        <div id="top-section">
            <div id="profile-picture-container">
                <img id="profile-picture" src={ProfileImage} alt="profile pic"></img>
            </div>
            <div id="text-container">
                <p id="subtitle">Report for</p>
                <p id="name">Jeremy Robson</p>
            </div>
        </div>
            <div id="time-container">
                <button class="time">Daily</button>
                <button class="time">Weekly</button>
                <button class="time">Monthly</button>
            </div>
    </div>
  )
}

export default Profile;