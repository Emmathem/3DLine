import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/css/mover.css';
import MoverLogo from '../../assets/images/delivery-truck.png';
import AppBackHome from '../AppBackHome';
import { Button } from '@material-ui/core';

const AppMoverHeader = () => {
  let history = useHistory();
  const returnHome = () => {
    history.push('/moversng');
  };
  return (
    <div className="moverheader">
      <div className="moverheader__col">
        <div className="moverheader__logo" onClick={returnHome}>
          <img src={MoverLogo} alt="logo" />
          <h3>MoversNG</h3>
        </div>
      </div>
      <div className="moverheader__col">
        <div className="moverheader__nav">
          <ul>
            <li>
              <AppBackHome color="#fff" />
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Feature</Link>
            </li>
            <li>
              <Link>Client</Link>
            </li>
            <li>
              <Link>Plans</Link>
            </li>
            <li>
              <Link to="/movers-ng/dashboard/login">Login</Link>
            </li>
            <li>
              <Button variant="contained" color="primary">
                JOIN US
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppMoverHeader;
