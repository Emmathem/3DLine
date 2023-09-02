import React, { useEffect, useState } from 'react';
import { Row, Col, notification, Card, Button, Tag } from 'antd';
// import AppDashboardGraph from './cards/AppDashboardGraph';
import AppDashboardLayout from './layouts/AppDashboardLayout';
// import { LOGGER } from '../../config';
import MailTableRecord from './MailTableRecord';
import { connect } from 'react-redux';
import {
  DeleteSingleMail,
  GetAllMails,
} from '../../store/actions/MailTmActions';
// import AppDashboardOrders from './cards/AppDashboardOrders';

const AppDashboard = props => {
  const { GetAllMails, DeleteSingleMail, tm_count, tm_mails } = props;
  const [fetching, setfetching] = useState(false);
  const [loading, setloading] = useState(false);

  const StartDeleteMails = async () => {
    setloading(true);
    for (let i = 0; i < 5; i++) {
      const tm_id = tm_mails[i].id;
      if (tm_id) {
        const res = await DeleteSingleMail(tm_id);
        setloading(false);
        if (res.success) {
          console.log(tm_count, 'tm_count');
          setloading(false);
          // break;
        }
      }
      await GetAllMails();
    }
  };

  const get = async () => {
    await GetAllMails();
  };

  useEffect(() => {
    // Start the delete loop every 5 minutes
    const interval = setInterval(async () => {
      console.log('here');
      // deleteLoop();
      await StartDeleteMails();
    }, 2 * 60 * 1000); // 5 minutes in milliseconds

    // Clean up the interval on unmount
    return () => clearInterval(interval);
  }, [tm_mails]);

  useEffect(() => {
    const getMails = async () => {
      setfetching(true);
      const payload = {
        page: 1,
      };
      const res = await GetAllMails(payload);
      setfetching(false);
      if (!res.success) {
        setfetching(false);
        notification.error({
          type: 'error',
          description: res.message,
        });
      }
    };
    getMails();
  }, [tm_count]);

  // LOGGER('p', props);
  return (
    <AppDashboardLayout pageTitle="Dashboard | MailTM">
      {/*<AppDashboardGraph />*/}
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={18} lg={18}>
          <div style={{ marginBottom: '10px' }}>
            <Tag>Total: {tm_count}</Tag>
          </div>
          <Card>
            <h3>Mails Record</h3>
            <MailTableRecord data={tm_mails} fetching={fetching} />
          </Card>
          {/*<AppDashboardOrders />*/}
        </Col>
        <Col xs={24} xl={6} lg={6}>
          {/*<AppPackages />*/}
          <Card>
            <Button
              loading={loading}
              type="danger"
              size="large"
              onClick={StartDeleteMails}
            >
              Initiate Delete
            </Button>
            {/*<Button
              type="default"
              style={{ marginLeft: '10px' }}
              size="large"
              onClick={StopDelete}
            >
              Stop Delete
            </Button>*/}
            <Button
              type="primary"
              style={{ marginLeft: '10px' }}
              size="large"
              onClick={get}
            >
              Refresh Mail
            </Button>
          </Card>
        </Col>
      </Row>
    </AppDashboardLayout>
  );
};

const mapStateToProps = state => {
  return {
    tm_mails: state.MailTMReducers.tm_mails,
    tm_count: state.MailTMReducers.tm_count,
  };
};

export default connect(mapStateToProps, { GetAllMails, DeleteSingleMail })(
  AppDashboard
);
