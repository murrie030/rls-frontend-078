import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Home from "./components/home";
import Overview from "./components/overview";
import TCM from "./components/tcm";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/overview" component={Overview} />
        <Route path="/tcm" component={TCM} />
      </Switch>
    </Router>
  );
}

export default App;
