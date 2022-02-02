import React from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const NavBar = () => {
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
        <Button type="primary">Create Account</Button>
      </div>
    </header>
  );
};

export default NavBar;
