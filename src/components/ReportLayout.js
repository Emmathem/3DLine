import React from 'react';
import '../assets/css/reports.css';
import { CaretRightOutlined, HomeOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ReportLayout = ({ pageTitle, children }) => {
  const history = useHistory();
  return (
    <>
      <div className="layout">
        <aside>
          <div className="aside-header" onClick={() => history.push('/')}>
            <HomeOutlined />
          </div>
          <div className="aside-menu">
            <div onClick={() => history.push('/reports')}>
              <span>Table Data</span>
              <CaretRightOutlined />
            </div>
            <div onClick={() => history.push('/reports/graph-details')}>
              <span>Graph Data</span>
              <CaretRightOutlined />
            </div>
          </div>
        </aside>
        <main>
          <div className="main-title">
            <h3>{pageTitle}</h3>
          </div>
          {children}
        </main>
      </div>
    </>
  );
};

ReportLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default ReportLayout;
