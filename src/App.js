import React from 'react';
import 'antd/dist/antd.css';
import './assets/css/main.css';

import HomeLandingPage from './components/home/HomeLandingPage';
import ReportPage from './components/ReportPage';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppGraphDetails from './components/AppGraphDetails';
import { applyMiddleware, createStore } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './store/reducers';
import MailTMLogin from './components/MailTM/MailTMLogin';
import AppDashboard from './components/MailTM/AppDashboard';

const store = createStore(reducers, {}, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Transition slide="slide up"> */}
          <Route path="/" exact component={HomeLandingPage} />
          <Route exact path="/reports" component={ReportPage} />
          <Route path="/reports/graph-details" component={AppGraphDetails} />
          <Route path="/mail/login" component={MailTMLogin} />
          <Route path="/mail/dashboard" component={AppDashboard} />
          {/* </Transition> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
