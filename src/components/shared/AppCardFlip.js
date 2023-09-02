import React from 'react';
import DefaultImage from '../../assets/images/default-image.jpeg';
import { LOGGER } from '../../utils/miscelleous';
const AppCardFlip = ({ fullname, role, slogan, picture, profilelink }) => {
  // props: img, name, link, position
  LOGGER('link', profilelink);
  // ihttps://res.cloudinary.com/emmathem-media-company/image/upload/v1619566383/frontend-picture_e8bcqj.jpg
  // get the first name from fullname
  const getFirstNameOnly = name => {
    if (!name) {
      return;
    }
    const first = name.split(' ');
    return first[0] || 'image';
  };
  return (
    <div className="flip">
      <div className="flip__cardinner">
        <div className="flip__cardfront">
          <img src={picture || DefaultImage} alt={getFirstNameOnly(fullname)} />
        </div>
        <div className="flip__cardback">
          <h3>{fullname || 'No Name Found'}</h3>
          <small>{role || 'JackTrade'}</small>
          <div className="freelancer__lines">
            <div />
            <div />
            <div />
          </div>
          <i>{slogan || ''}</i>
          <div className="flip__link">
            {profilelink !== undefined ? (
              <a href={profilelink} target="_blank" rel="noreferrer">
                View Profile
              </a>
            ) : (
              <p className="flip__nolink">No Profile</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCardFlip;
