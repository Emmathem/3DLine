import React, { useState } from 'react';
import { Switch } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';
// import MoverLogo from '../../../../assets/images/delivery-truck.png';
import AppLogonUser from '../../shared/AppLogonUser';

const AppDashboardHeader = () => {
  const [state, setState] = useState({
    themeBlack: true,
    checkedB: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <header className={`dheader ${!state.themeBlack ? 'light' : ''}`}>
      <div className="dheader__col">
        <div className="dheader__logo">
          <h3>TM Mails</h3>
        </div>
      </div>
      <div className="dheader__col">
        <nav className="dheader__nav">
          <ul>
            <li>
              <Switch
                checked={state.themeBlack}
                onChange={handleChange}
                name="themeBlack"
                color="primary"
              />
            </li>
            <li>
              <Notifications />
            </li>
            <li>
              <AppLogonUser
                userImage="https://res.cloudinary.com/emmathem-media-company/image/upload/v1619566383/frontend-picture_e8bcqj.jpg"
                username="Temitope Falua"
                theme={state.themeBlack}
              />
            </li>
            {/* <li style={{ display: "flex", alignItems: "center" }}>
              <ExitToApp />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppDashboardHeader;
