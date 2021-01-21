import React from "react";
import "antd/dist/antd.css";
import "./assets/css/main.css";

import LandingPage from "./components/LandingPage";
import { Provider } from "react-redux";
// import { Transition } from "antd";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppGraphDetails from "./components/AppGraphDetails";
import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";
import reducers from "./store/reducers";

const store = createStore(reducers, {}, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* <Transition slide="slide up"> */}
          <Route exact path="/" component={LandingPage} />
          <Route path="/app-graph-details" component={AppGraphDetails} />
          {/* </Transition> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
