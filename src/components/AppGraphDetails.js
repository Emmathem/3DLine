import React, { Component } from 'react';
import AppSideBar from './shared/AppSideBar';
import AppHeader from './shared/AppHeader';
import BarChart from './shared/BarChart';
import { Divider, Card, Row, Col, Layout } from 'antd';

const { Content } = Layout;
class AppGraphDetails extends Component {
  render() {
    return (
      <Layout>
        <AppSideBar />
        <Layout className="site-layout">
          <AppHeader />
          <Content className="site-layout-background">
            <h4>Graph Section</h4>
            <Divider />
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card title="Total Cases" size="small">
                  <BarChart />
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Confirmed Cases" size="small">
                  <p>Card content</p>
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppGraphDetails;
