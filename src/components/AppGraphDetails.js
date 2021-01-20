import React, {Component} from 'react';
import AppSideBar from "./shared/AppSideBar";
import {Layout} from 'antd';

const {Content} = Layout;
class AppGraphDetails extends Component {
  render() {
    return (
        <div>
          <AppSideBar />
          <Layout className="site-layout">
            <Content className="site-layout-background">
              <h4>Graph Section</h4>
            </Content>
          </Layout>
        </div>
    )
  }
}

export default AppGraphDetails;