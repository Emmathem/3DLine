import React, { Component } from 'react';
import { getAllCovid19Data } from '../store/actions/GetAllCovidAction';
import { Divider, Card, Row, Col, Layout } from 'antd';
import { connect } from 'react-redux';
import AppSideBar from './shared/AppSideBar';
import AppHeader from './shared/AppHeader';
import AppTableData from './AppTableData';
import { formatNumber, LOGGER } from '../config';
import { SettingOutlined } from '@ant-design/icons';
const { Content } = Layout;

class LandingPage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     covidData: {},
  //   };
  // }
  componentDidMount() {
    LOGGER('props', this.props);
    this.loadCovidData();
  }

  loadCovidData() {
    this.props.getAllCovid19Data();
  }

  render() {
    const { covidData } = this.props;
    return (
      <Layout>
        <AppSideBar />
        <Layout className="site-layout">
          <AppHeader />

          <Content className="site-layout-background card__settings">
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card bordered={false} className="card-blue order-card">
                  <h6>All Sampled Cases</h6>
                  <h2>
                    <SettingOutlined className="align-left" />
                    {formatNumber(covidData.totalSamplesTested)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-blue order-card">
                  <h6>Confirmed Cases</h6>
                  <h2>
                    <SettingOutlined className="align-left" />{' '}
                    {formatNumber(covidData.totalConfirmedCases)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-gray order-card">
                  <h6>Active Cases</h6>
                  <h2>
                    <SettingOutlined className="align-left" />{' '}
                    {formatNumber(covidData.totalActiveCases)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-green order-card">
                  <h6>Discharged Cases</h6>
                  <h2>
                    <SettingOutlined className="align-left" />{' '}
                    {formatNumber(covidData.discharged)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-red order-card">
                  <h6>Death Recorded</h6>
                  <h2>
                    <SettingOutlined className="align-left" />{' '}
                    {formatNumber(covidData.death)}
                  </h2>
                </Card>
              </Col>
            </Row>
            <Divider />
            <AppTableData state={covidData.states} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => state.covidData;
const stateAction = { getAllCovid19Data };

export default connect(mapStateToProps, stateAction)(LandingPage);
