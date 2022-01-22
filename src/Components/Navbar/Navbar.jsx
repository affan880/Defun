import React, {useState} from 'react';
// import { Collapse, IconButton, Paper, SwipeableDrawer } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import useStyles from "./Navbar_css";

function Navbar() {
  const styles = useStyles();
  // const [Device, setDevice] = useState(false);
  // const [clicked, setClicked] = useState(false);
  // const [onClick, setonClick] = useState(false);

  // const toggle = (open) => (event) => {
  //   if (event) {
  //     return
  //   }
  //   setDevice(open);
  // };
  // const handleClicked = () => {
  //   setClicked(!open);
  // }
  // const handleClicks = () => {
  //   setonClick(!open)
  // }
  
  return <div>
    <nav className={styles.Navbar} >
      <Link to="/" >
        <div className={styles.Navbar_logo} />
      </Link>
    </nav>  
  </div>;
}

export default Navbar;
