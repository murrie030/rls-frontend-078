import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/sidebar";
import Home from "./components/home";
import Overview from "./components/overview";
import vehicleForm from "./components/forms/vehicleForm";
import VehicleCreateForm from "./components/forms/vehicleCreateForm.jsx";
import TCM from "./components/tcm";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Overview} />
        <Route path="/overview/:id" component={vehicleForm} />
        <Route path="/vehicle-create-form" component={VehicleCreateForm} />
        <Route path="/tcm" component={TCM} />
      </Switch>
    </Router>
  );
}

export default App;
