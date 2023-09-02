import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Popconfirm } from 'antd';
import {
  ExitToApp,
  Help,
  Menu,
  Dashboard,
  Person,
  Settings,
  LibraryBooks,
  Receipt,
} from '@material-ui/icons';
import { LOGGER } from '../../../config';
import { REMOVE_TOKEN } from '../../../connection/Storage';

const AppDashboardSidebar = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    REMOVE_TOKEN();
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      history.push('/mail/login');
    }, 2000);
  };

  const handleCancel = () => {
    LOGGER('Clicked cancel button');
    setVisible(false);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__lockIcon">
        <Menu />
        {/* <img src={LockIcon} alt="lock" /> */}
      </div>
      <div className="sidebar__menu">
        <div
          onClick={() => history.push('/mail/dashboard')}
          className="navholder"
        >
          <div className="navicon">
            <Dashboard />
          </div>
          <div>Dashboard</div>
        </div>
        <div
          onClick={() => history.push('/mail/dashboard')}
          className="navholder"
        >
          <div className="navicon">
            <Person />
          </div>
          <div>Users</div>
        </div>
        <div
          onClick={() => history.push('/mail/dashboard')}
          className="navholder"
        >
          <div className="navicon">
            <Receipt />
          </div>
          <div>Dashboard</div>
        </div>
        <div
          onClick={() => history.push('/mail/dashboard')}
          className="navholder"
        >
          <div className="navicon">
            <LibraryBooks />
          </div>
          <div>Dashboard</div>
        </div>
        <div
          onClick={() => history.push('/mail/dashboard')}
          className="navholder"
        >
          <div className="navicon">
            <Settings />
          </div>
          <div>Settings</div>
        </div>
      </div>
      <div className="sidebar__footer">
        <Popconfirm
          placement="top"
          title="Are you sure you want to logout this session?"
          visible={visible}
          onConfirm={handleOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancel}
          okText="Logout"
        />
        <ul>
          <li>
            <Link to="/">
              <Help />
            </Link>
          </li>
          <li onClick={showPopconfirm}>
            <ExitToApp />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AppDashboardSidebar;
