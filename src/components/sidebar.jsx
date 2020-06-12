import React from "react";

import styles from "../css/sidebar.module.css";

/* 
  Stateless Functional Component 
  A simple function that returns a sidebar
*/

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      {/* Sidebar */}
      <nav id="sidebar"></nav>
    </div>
  );
};

export default Sidebar;
