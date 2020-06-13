import React from "react";

import Sidebar from "./components/sidebar";
// import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <Sidebar />
      <main className="container">{/* <Home /> */}</main>
    </React.Fragment>
  );
}

export default App;
