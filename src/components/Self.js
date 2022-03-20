import React from 'react';
import SelfImage from './images/icon-self';
import './Icon.css';


function Self() {
  return (
    <div id="icon-container-self">
       <img src={SelfImage} alt="Self-Care Icon"/>
    </div>
  )
}

export default Self;