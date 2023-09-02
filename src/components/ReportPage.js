import React, { useEffect, useState } from 'react';
import {
  getAllCovid19Data,
  GetStatesByCountry2,
} from '../store/actions/GetAllCovidAction';
import { Card, Row, Col, notification } from 'antd';
import { connect } from 'react-redux';
import AppTableData from './AppTableData';
import { formatNumber, LOGGER } from '../config';
import {
  SettingOutlined,
  HeatMapOutlined,
  MedicineBoxOutlined,
  MonitorOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import ReportLayout from './ReportLayout';
import AppLoader from './AppLoader';

const ReportPage = props => {
  const {
    getAllCovid19Data,
    GetStatesByCountry2,
    covidData,
    countryStates,
  } = props;
  const [loading, setLoading] = useState(false);
  LOGGER('vv', covidData.covidData);
  useEffect(() => {
    const getCovidData = async () => {
      try {
        setLoading(true);
        await getAllCovid19Data();
        setLoading(false);
      } catch (e) {
        LOGGER('e', e);
        setLoading(false);
      }
    };
    getCovidData();
  }, []);

  useEffect(() => {
    const getStates = async () => {
      try {
        const res = await GetStatesByCountry2('Nigeria');
        if (!res.success) {
          notification.error({
            type: 'error',
            message: res.message,
          });
        }
      } catch (e) {
        LOGGER('e', e);
      }
    };
    getStates();
  }, []);

  return (
    <>
      <ReportLayout pageTitle="Covid-19 Report Data">
        {loading ? (
          <AppLoader loadingText="Fetching record" size="large" />
        ) : (
          <div style={{ marginTop: '2rem' }} className="card__settings">
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <Card bordered={false} className="card-blue order-card">
                  <h6>All Sampled Cases</h6>
                  <h2>
                    <SettingOutlined />
                    {formatNumber(covidData.totalSamplesTested)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-blue order-card">
                  <h6>Confirmed Cases</h6>
                  <h2>
                    <MonitorOutlined />
                    {formatNumber(covidData.totalConfirmedCases)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-gray order-card">
                  <h6>Active Cases</h6>
                  <h2>
                    <MedicineBoxOutlined />
                    {formatNumber(covidData.totalActiveCases)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-green order-card">
                  <h6>Discharged Cases</h6>
                  <h2>
                    <DeploymentUnitOutlined />
                    {formatNumber(covidData.discharged)}
                  </h2>
                </Card>
              </Col>
              <Col span={6}>
                <Card bordered={false} className="card-red order-card">
                  <h6>Death Recorded</h6>
                  <h2>
                    <HeatMapOutlined />
                    {formatNumber(covidData.death)}
                  </h2>
                </Card>
              </Col>
            </Row>

            <AppTableData
              data={covidData.states}
              countryStates={countryStates}
            />
          </div>
        )}
      </ReportLayout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    covidData: state.covidData.covidData,
    loading: state.covidData.loading,
    countryStates: state.covidData.stateData,
  };
};

export default connect(mapStateToProps, {
  getAllCovid19Data,
  GetStatesByCountry2,
})(ReportPage);
