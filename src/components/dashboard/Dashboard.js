import React, { Component } from "react";
import AppHeader from "../shared/AppHeader";
import {AppFooter} from "../shared/AppFooter";
// import {Row, Col} from 'react-bootstrap'
import {Sidebar} from "./Sidebar";

class Dashboard extends Component {
  render() {
    return (
        <div>
            <AppHeader />
            <div className="pageContainer">
              <div className="row">
                <div className="col-md-2">
                  <Sidebar />
                </div>
                <div className="col-md-9">
                  <h3>Welcome to Covid-19 Dashboard</h3>
                </div>
              </div>
              {/*<Row>
                <Col md={3}>
                  <Sidebar />
                </Col>
                <Col md={9}>
                  <h3>Welcome to Covid-19 Dashboard</h3>
                </Col>
              </Row>*/}
            </div>
            <AppFooter />
        </div>
    )
  }
}

export default Dashboard;