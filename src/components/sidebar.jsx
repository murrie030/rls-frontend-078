import React from "react";
import { Link } from "react-router-dom";

// import Home from "../components/home";

/* 
  Stateless Functional Component 
  A simple function that returns a sidebar and a Home component
*/

const Sidebar = () => {
  const icon = {
    marginRight: "10px",
  };
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <nav id="sidebar">
        {/* Sidebar brand */}
        <Link to="/">
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
        </Link>
        {/* End of sidebar brand */}

        <ul className="list-unstyled components">
          <Link to="/">
            <li className="active">
              <a href="index.html">
                <i className="fas fa-home" style={icon}></i>
                Home
              </a>
            </li>
          </Link>

          <Link to="/overview">
            <li>
              <a href="overview.html">
                <i className="fas fa-table" style={icon}></i>
                Overview
              </a>
            </li>
          </Link>

          <Link to="/tcm">
            <li>
              <a href="tcm.html">
                <i className="fas fa-code" style={icon}></i>
                Train Composition Message
              </a>
            </li>
          </Link>
        </ul>
      </nav>
      {/* End sidebar */}

      {/* Page Content */}
      <div id="content">{/* <Home /> */}</div>
    </div>
  );
};

export default Sidebar;
