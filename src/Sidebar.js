import React from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import AppBar from "material-ui/AppBar";
import {Link} from 'react-router-dom'

const EmptyComponent = () => <div />;

const Sidebar = props => (
  <Drawer open={props.open}>
    <AppBar title="Welcome!" iconElementLeft={<EmptyComponent/>} />
    <Link to="/"><MenuItem>Overview</MenuItem></Link>
    <Link to="/random"><MenuItem>Random</MenuItem></Link>
  </Drawer>
);

export default Sidebar;
