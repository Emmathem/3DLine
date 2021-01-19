import React from "react";
// import reducers from "./store/reducers";
import Thunk from "redux-thunk";

import LandingPage from "./components/LandingPage";
import Dashboard from "./components/dashboard/Dashboard";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const reducers  = () => {};
const store = createStore(reducers, {}, applyMiddleware(Thunk));

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </Provider>
);