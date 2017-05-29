import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import LandingPage from "./LandingPage";

const RouteContainer = props => (
  <Router>
    <div>
      <Sidebar open={true} />
      <div style={{ paddingLeft: "200 px" }}>
        <Navbar />
        <Route exact path="/" component={LandingPage} />
      </div>
    </div>
  </Router>
);

export default RouteContainer;
