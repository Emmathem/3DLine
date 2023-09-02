import React from 'react';
import DefaultImage from '../../assets/images/default-image.jpeg';

const AppLogonUser = ({ userImage, username, theme }) => {
  return (
    <div className="usercard">
      <div className="usercard__imgholder">
        <img src={userImage || DefaultImage} alt={username} />
      </div>
      <div className="usercard__details">
        <span className={`usercard__details__name ${!theme ? 'light' : ''}`}>
          {username || 'No User'}
        </span>
      </div>
    </div>
  );
};

export default AppLogonUser;
