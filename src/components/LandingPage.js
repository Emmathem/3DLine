import React, {Component} from 'react';

import { Card, Row, Col, Layout } from 'antd';

import AppSideBar from "./shared/AppSideBar";
import AppHeader from "./shared/AppHeader";

const { Content } = Layout;

class LandingPage extends Component {
  render() {
    return (
        <Layout>
          <AppSideBar />
          <Layout className="site-layout">
            <AppHeader />
            <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
            >
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Card bordered={false} className="card-blue">
                    <Row>
                      <Col><span>All Confirmed Cases</span></Col>
                      <Col>1,000</Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false} className="card-gray">
                    <Row>
                      <Col><span>All Active Cases</span></Col>
                      <Col>900</Col>
                    </Row>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false} className="card-green">
                    <Row>
                    <Col><span>All Discharged Cases</span></Col>
                    <Col>100</Col>
                   </Row>
                  </Card>
                </Col>
                <Col span={6}>
                  <Card bordered={false} className="card-red">
                    <Row>
                    <Col><span>Death Recorded</span></Col>
                    <Col>10</Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            
            </Content>
          </Layout>
        </Layout>
    );
  }
}

export default LandingPage;
// ReactDOM.render(<SiderDemo />, mountNode);