import React, { Component } from "react";

// import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Home />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
