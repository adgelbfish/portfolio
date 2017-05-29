import React from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RouteContainer from './RouteContainer'

const App = () => (
  <MuiThemeProvider>
    <RouteContainer/>
  </MuiThemeProvider>
);

export default App;
