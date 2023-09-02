import React from 'react';
import '../../assets/css/landing.css';
import NavBar from '../NavBar';
import { Button, Col, Row } from 'antd';
import StatImage from '../../assets/estatisticas-png-6.png';
import { useHistory } from 'react-router-dom';

const HomeLandingPage = () => {
  const history = useHistory();
  const GotoReport = () => {
    history.push('/reports');
  };
  return (
    <>
      <div className="landing">
        <div className="landing__inner">
          <NavBar />
          <div className="contentdetails">
            <Row>
              <Col xs={24} xl={12} lg={12}>
                <div className="inner-details">
                  <h3>
                    Get your Updated <br /> Covid-19 Report
                  </h3>
                  <Row gutter={13}>
                    <Col xs={6} xl={6} lg={4}>
                      <Button
                        type="primary"
                        className="btn reportbtn"
                        block
                        onClick={GotoReport}
                      >
                        View Report
                      </Button>
                    </Col>
                    <Col xs={6} xl={6} lg={4}>
                      <Button type="default" className="btn" block>
                        Get Alert
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={24} lg={12} xl={12}>
                <div className="inner-img">
                  <img src={StatImage} alt="image" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLandingPage;
