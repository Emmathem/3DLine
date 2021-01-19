import React, {Component} from "react";
import SharedFunctions from "../sharedFunctions";

export class Sidebar extends Component {
  render() {
    return (
        <div>
          <div className="sidebarContainer">Sidebar</div>
          <SharedFunctions />
        </div>
    )
  }
}