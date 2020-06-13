import React from "react";

// import styles from "../css/sidebar.module.css";

/* 
  Stateless Functional Component 
  A simple function that returns a sidebar
*/

const Sidebar = () => {
  return (
    <div id="wrapper">
      {/* Sidebar */}
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-warning p-0">
        <div className="container-fluid d-flex flex-column p-0">
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
          <hr className="sidebar-divider my-0" />
          <ul className="nav navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item" role="presentation">
              <a className="nav-link active" href="index.html">
                <i class="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="overview.html">
                <i class="fas fa-table"></i>
                <span>Overview</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="train-composition-message.html">
                <i class="fas fa-code"></i>
                <span>Train Composition Message</span>
              </a>
            </li>
          </ul>
          {/* Sidebar toggler button */}
          <div className="text-center d-none d-md-inline">
            <button
              className="btn rounded-circle border-0"
              id="sidebarToggle"
              type="button"
            ></button>
          </div>
          {/* End of sidebar toggler button */}
        </div>
      </nav>
      {/* End of sidebar */}
    </div>
  );
};

export default Sidebar;
