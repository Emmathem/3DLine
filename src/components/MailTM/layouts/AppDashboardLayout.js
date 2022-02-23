import React from 'react';
import { Helmet } from 'react-helmet';
import AppDashboardHeader from './AppDashboardHeader';
import AppDashboardSidebar from './AppDashboardSidebar';
import { LOGGER } from '../../../config';

const AppDashboardLayout = ({ children, pageTitle }) => {
  LOGGER('title', pageTitle);
  return (
    <div className="dashboard">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <AppDashboardSidebar />
      <div className="mainwrapper">
        <AppDashboardHeader />
        <main className="main">{children}</main>
      </div>
    </div>
  );
};

export default AppDashboardLayout;
