import React, { Component } from "react";
import AppHeader from "../shared/AppHeader";
import {AppFooter} from "../shared/AppFooter";

class Dashboard extends Component {
  render() {
    return (
        <div>
          <AppHeader />
          <h3>Welcome to Covid-19 Dashboard</h3>
          <AppFooter />
        </div>
    )
  }
}

export default Dashboard;