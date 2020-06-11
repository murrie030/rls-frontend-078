import React, { Component } from "react";

import "../js/sidebar-old.js";

class Sidebar extends Component {
  render() {
    return (
      <div className="d-wrapper" id="wrapper">
        {/* Sidebar-wrapper */}
        <div className="bg-warning border-right" id="side-wrapper">
          <div className="sidebar-heading">RailLinkSystems</div>
          <div className="list-group list-group-flush">
            <a
              href="index.html"
              className="list-group-item list-group-item-action bg-warning"
            >
              Home
            </a>
            <a
              href="overview.html"
              className="list-group-item list-group-item-action bg-warning"
            >
              Overview
            </a>
            <a
              href="train-composition-message.html"
              className="list-group-item list-group-item-action bg-warning"
            >
              Train Compossition Message
            </a>
          </div>
        </div>
        {/* End of the sidebar-wrapper */}

        {/* Page content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-dark bg-warning border-bottom">
            <button className="btn btn-dark" id="menu-toggle">
              Toggle Menu
            </button>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
