import {makeStyles} from "@material-ui/core/styles"

export default makeStyles((theme) => ({
  Navbar: {
    display: "flex",
    flexdirection: "row",
    height: "60px",
    backgroundColor: "#000000",
  },
  Navbar_logo: {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Arial",
    fontSize: "30px",
    margin: "12px 15px",
    textDecoration: "none",
  },
  NavbarElementsContainer: {
    position: "relative",
    float: "right",
    paddingLeft:"900px",
    marginTop: "15px",  
    display: "flex",
    flexdirection:"row",
    textDecoration: "none",
    color: "#ffffff",

  },
  NavbarPages: {
    textDecoration: "none",
    listStyleType: "none",
    color: "#ffffff",
    "&:hover": {
      textDecoration: "none",
      color: "#000000",
    },
  },
  NavbarPagesLink: {
    border: "4px solid transparent",
    textDecoration: "none",
    color: "#ffffff",
    padding: "0px 10px",
    fontWeight: "500",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#000000",
      border: "4px solid #ffffff",
    },
  },
}));