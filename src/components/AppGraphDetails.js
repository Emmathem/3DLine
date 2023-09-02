import React from 'react';
import ActiveDataGraph from './graph/ActiveDataGraph';
import { Tabs } from 'antd';
import { connect } from 'react-redux';
import { getAllCovid19Data } from '../store/actions/GetAllCovidAction';
import ConfirmDataGraph from './graph/ConfirmDataGraph';
import DeathDataGraph from './graph/DeathDataGraph';
import DischargedDataGraph from './graph/DischargedDataGraph';
import { LOGGER } from '../config';
import ReportLayout from './ReportLayout';
const { TabPane } = Tabs;

const AppGraphDetails = props => {
  const { covidData } = props;
  const { states } = covidData || [];
  LOGGER('state', states);

  return (
    <>
      <ReportLayout pageTitle="Covid-19 Graph Data">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Confirmed Cases" key="1">
            <ConfirmDataGraph stateData={states} />
          </TabPane>
          <TabPane tab="Active Cases" key="2">
            <ActiveDataGraph stateData={states} />
          </TabPane>
          <TabPane tab="Discharged Cases" key="3">
            <DischargedDataGraph stateData={states} />
          </TabPane>
          <TabPane tab="Death Cases" key="4">
            <DeathDataGraph stateData={states} />
          </TabPane>
        </Tabs>
      </ReportLayout>
    </>
  );
};

// class AppGraphDetails extends Component {
//   componentDidMount() {
//     this.props.getAllCovid19Data();
//   }
//   callback(key) {
//     LOGGER('ley', key);
//   }
//
//   render() {
//     const { covidData } = this.props;
//     const { states } = covidData || [];
//     LOGGER('state', states);
//     LOGGER('state data', covidData);
//     return (
//       <Layout>
//         <AppSideBar />
//         <Layout className="site-layout">
//           <AppHeader />
//           <Content className="site-layout-background">
//             <h4>Graph Section</h4>
//             <Tabs defaultActiveKey="1" onChange={this.callback}>
//               <TabPane tab="Confirmed Cases" key="1">
//                 <ConfirmDataGraph stateData={states} />
//               </TabPane>
//               <TabPane tab="Active Cases" key="2">
//                 <ActiveDataGraph stateData={states} />
//               </TabPane>
//               <TabPane tab="Discharged Cases" key="3">
//                 <DischargedDataGraph stateData={states} />
//               </TabPane>
//               <TabPane tab="Death Cases" key="4">
//                 <DeathDataGraph stateData={states} />
//               </TabPane>
//             </Tabs>
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }

const mapStateToProps = state => state.covidData;
const stateAction = { getAllCovid19Data };

export default connect(mapStateToProps, stateAction)(AppGraphDetails);
