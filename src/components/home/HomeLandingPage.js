import React from 'react';
import '../../assets/css/landing.css';
import NavBar from '../NavBar';

const HomeLandingPage = () => {
  return (
    <>
      <div className="landing">
        <div className="landing__inner">
          <NavBar />
          <div className="contentdetails"></div>
        </div>
      </div>
    </>
  );
};

export default HomeLandingPage;
