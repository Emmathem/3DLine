import React, { Component } from 'react';
import { getAllCovid19Data } from '../store/actions/GetAllCovidAction';
import { Divider, Card, Row, Col, Layout } from 'antd';
import { connect } from 'react-redux';
import AppSideBar from './shared/AppSideBar';
import AppHeader from './shared/AppHeader';
import AppTableData from './AppTableData';
import { LOGGER } from '../config';
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
    // const pathParam = this.props.match.params.name;
    // const designerSplit = pathParam.split('-');
    // const designerId = designerSplit[designerSplit.length - 1];
    // const body = {page: this.props.page, size: this.props.size};
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
                <Card bordered={false} className="card-blue">
                  <Row>
                    <Col className="label__title" span={8}>
                      <span>All Confirmed Cases</span>
                    </Col>
                    <Col className="count__settings" span={12}>
                      {covidData.totalConfirmedCases}
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-gray">
                  <Row>
                    <Col>
                      <span>All Active Cases</span>
                    </Col>
                    <Col>{covidData.totalActiveCases}</Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-green">
                  <Row>
                    <Col>
                      <span>All Discharged Cases</span>
                    </Col>
                    <Col>100</Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-red">
                  <Row justify="space-around">
                    <Col span={6}>
                      <span>Death Recorded</span>
                    </Col>
                    <Col span={16}>{covidData.death}</Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Divider />
            <AppTableData />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => state.covidData;
const stateAction = { getAllCovid19Data };

export default connect(mapStateToProps, stateAction)(LandingPage);
