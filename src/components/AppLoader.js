import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

const AppLoader = ({ loadingText, size }) => {
  return (
    <div className="loading">
      <Spin size={size} />
      <span>{loadingText}. Please wait...</span>
    </div>
  );
};

AppLoader.propTypes = {
  loadingText: PropTypes.string.isRequired,
  size: 'large',
};

export default AppLoader;
