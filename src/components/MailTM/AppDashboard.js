import React from 'react';
import { Row, Col } from 'antd';
// import AppDashboardGraph from './cards/AppDashboardGraph';
import AppDashboardLayout from './layouts/AppDashboardLayout';
import { LOGGER } from '../../config';
// import AppDashboardOrders from './cards/AppDashboardOrders';
// import AppPackages from './cards/AppPackages';

const AppDashboard = props => {
  LOGGER('p', props);
  return (
    <AppDashboardLayout pageTitle="Dashboard | MailTM">
      {/*<AppDashboardGraph />*/}
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={16} lg={16}>
          <h3>Mailss</h3>
          {/*<AppDashboardOrders />*/}
        </Col>
        <Col xs={24} xl={8} lg={8}>
          {/*<AppPackages />*/}
        </Col>
      </Row>
    </AppDashboardLayout>
  );
};

export default AppDashboard;
