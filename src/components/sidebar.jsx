import React from "react";

import Home from "../components/home";

/* 
  Stateless Functional Component 
  A simple function that returns a sidebar
*/

const Sidebar = () => {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar">
        {/* Sidebar brand */}
        <a
          className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-link"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            <span>RailLinkSystems</span>
          </div>
        </a>
        {/* End of sidebar brand */}

        <ul className="list-unstyled components">
          <li className="active">
            <a href="index.html">
              <i className="fas fa-home"></i>
              Home
            </a>
          </li>
          <li>
            <a href="overview.html">
              <i className="fas fa-table"></i>
              Overview
            </a>
          </li>
          <li>
            <a href="train-composition-message.html">
              <i className="fas fa-code"></i>
              Train Composition Message
            </a>
          </li>
        </ul>
      </nav>
      {/* End sidebar */}

      {/* Sidebar toggler button */}
      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="btn btn-warning"
              id="sidebarCollapse"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-align-left"></i>
              <span>Toggle sidebar</span>
            </button>
          </div>
        </nav>

        <Home />
      </div>
      {/* End sidebar toggler button */}
    </div>
  );
};

export default Sidebar;
