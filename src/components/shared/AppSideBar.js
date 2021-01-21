import React, {Component} from 'react';
import {Menu,Layout} from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
const {Sider} = Layout;

class AppSideBar extends Component {

  state = {
    collapsed: false,
  };

  render() {
    return (
        <div>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">COVID-19 DATA</div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <NavLink to="/">Dashboard</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <NavLink to='/app-graph-details'>Graph Detail</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                <NavLink to='/'>Data Table</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
        </div>
    )
  }
}

export default AppSideBar;