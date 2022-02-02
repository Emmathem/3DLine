import React, { useEffect } from 'react';
import { getAllCovid19Data } from '../store/actions/GetAllCovidAction';
import { Card, Row, Col } from 'antd';
import { connect } from 'react-redux';
import AppTableData from './AppTableData';
import { formatNumber, LOGGER } from '../config';
import { SettingOutlined } from '@ant-design/icons';
import ReportLayout from './ReportLayout';
import AppLoader from './AppLoader';

const ReportPage = props => {
  const { getAllCovid19Data, covidData, loading } = props;
  LOGGER('vv', covidData);
  useEffect(() => {
    const getCovidData = async () => {
      try {
        await getAllCovid19Data();
      } catch (e) {
        LOGGER('e', e);
      }
    };
    getCovidData();
  }, []);

  return (
    <>
      <ReportLayout pageTitle="Covid-19 Report Data">
        {loading ? (
          <AppLoader loadingText="Fetching record" size="large" />
        ) : (
          <div style={{ marginTop: '2rem' }}>
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

            <AppTableData />
          </div>
        )}
      </ReportLayout>
    </>
  );
};

const mapStateToProps = state => {
  return {
    covidData: state.covidData,
    loading: state.covidData.loading,
  };
};

export default connect(mapStateToProps, { getAllCovid19Data })(ReportPage);
