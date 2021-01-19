import React, { Component } from "react";
import AppHeader from "../shared/AppHeader";
import {AppFooter} from "../shared/AppFooter";
// import {Row, Col} from 'react-bootstrap'
import {Sidebar} from "./Sidebar";
// import {array}

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
                  <div className="row">
                    <div className="col-xl-3 col-md-6">
                      <div className="card prod-p-card card-red">
                        <div className="card-body">
                          <div className="row align-items-center m-b-30">
                            <div className="col">
                              <h6 className="m-b-5 text-black-50">Card 1</h6>
                              <h3 className="m-b-0 f-w-700 text-white">
                                1
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card prod-p-card card-red">
                        <div className="card-body">
                          <div className="row align-items-center m-b-30">
                            <div className="col">
                              <h6 className="m-b-5 text-black-50">Card 2</h6>
                              <h3 className="m-b-0 f-w-700 text-white">
                                3
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card prod-p-card card-red">
                        <div className="card-body">
                          <div className="row align-items-center m-b-30">
                            <div className="col">
                              <h6 className="m-b-5 text-black-50">Card 3</h6>
                              <h3 className="m-b-0 f-w-700 text-white">
                                3
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                      <div className="card prod-p-card card-red">
                        <div className="card-body">
                          <div className="row align-items-center m-b-30">
                            <div className="col">
                              <h6 className="m-b-5 text-black-50">Card 4</h6>
                              <h3 className="m-b-0 f-w-700 text-white">
                                4
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
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