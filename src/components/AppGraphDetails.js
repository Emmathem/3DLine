import React, { Component } from 'react';
import AppSideBar from './shared/AppSideBar';
import AppHeader from './shared/AppHeader';
import BarChart from './shared/BarChart';
import { Tabs, Layout } from 'antd';
import { connect } from 'react-redux';
import { getAllCovid19Data } from '../store/actions/GetAllCovidAction';

const { Content } = Layout;
const { TabPane } = Tabs;

class AppGraphDetails extends Component {
  componentDidMount() {
    this.props.getAllCovid19Data();
  }
  callback(key) {
    console.log(key);
  }

  render() {
    const { covidData } = this.props;
    return (
      <Layout>
        <AppSideBar />
        <Layout className="site-layout">
          <AppHeader />
          <Content className="site-layout-background">
            <h4>Graph Section</h4>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="Active Cases" key="1">
                <BarChart covidData={covidData} />
              </TabPane>
              <TabPane tab="Confirmed Cases" key="2">
                Confirmed Cases
              </TabPane>
              <TabPane tab="Discharged Cases" key="3">
                Discharged
              </TabPane>
              <TabPane tab="Death Cases" key="4">
                Discharged
              </TabPane>
            </Tabs>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => state.covidData;
const stateAction = { getAllCovid19Data };

export default connect(mapStateToProps, stateAction)(AppGraphDetails);
