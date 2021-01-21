import React from "react";
import 'antd/dist/antd.css';
import "./assets/css/main.css";

import LandingPage from "./components/LandingPage";
import {Provider} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AppGraphDetails from "./components/AppGraphDetails";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const reducers = () => {};
const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/app-graph-details' component={AppGraphDetails}/>
          </Switch>
        </BrowserRouter>
      </Provider>
  )
};

export default App;
