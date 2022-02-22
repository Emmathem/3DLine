import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

const NavBar = () => {
  const history = useHistory();
  return (
    <header className="header">
      <div className="header__logo">
        <HomeOutlined
          style={{ fontSize: '26px', color: 'lightgoldenrodyellow' }}
        />
      </div>
      <nav className="nav">
        <div>
          <span>Data</span>
        </div>
        <div>
          <span>About</span>
        </div>
        <div>
          <span>Contact</span>
        </div>
      </nav>

      <div className="rightNav">
        <Button type="primary" onClick={() => history.push('/mail/login')}>
          Create Account
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
