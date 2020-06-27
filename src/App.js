import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Home from "./components/home";
import Overview from "./components/overview";
import VehicleDetail from "./components/vehicleDetail";
import TCM from "./components/tcm";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Overview} />
        <Route path="/overview/vehicle-id" component={VehicleDetail} />
        <Route path="/tcm" component={TCM} />
      </Switch>
    </Router>
  );
}

export default App;
