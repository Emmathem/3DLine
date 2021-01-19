import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/images/data-img.png';

class LandingPage extends Component {
  render() {
    return (
     <div>
       <div className="App landingContainer">
         <img src={logo} alt="logo"/>
         <NavLink to="/dashboard">View Dashboard</NavLink>
       </div>
     </div>
    )
  }
}

export default LandingPage;