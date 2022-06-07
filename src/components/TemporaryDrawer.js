import React, { useState, Fragment } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, makeStyles } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import docs from "../images/docs.png";
import logo from "../images/logo.png";
import drive from "../images/drive.png";
import sheets from "../images/sheets.png";
import slides from "../images/slides.jpg";
import "./Drawer.css";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

const useStyles = makeStyles({
  listItem: {
    marginLeft: "20px",
    fontWeight: "600",
    fontSize: "14px",
    color: "gray",
  },
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = useState({
    left: false, // this help to open or close the sidebar
  });

  const toggleDrawer = (anchor, open) => (e) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{ width: "250px" }} role="presentation">
      <Divider />
      <List>
        <ListItem>
          <ListItemText style={{ fontSize: "48px", marginLeft: "5px" }}>
            <span
              style={{
                color: "blue",
                fontWeight: "700",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial, sans-serif",
              }}
            >
              G
            </span>
            <span
              style={{
                color: "red",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial, sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "yellow",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial, sans-serif",
              }}
            >
              o
            </span>
            <span
              style={{
                color: "blue",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial, sans-serif",
              }}
            >
              g
            </span>
            <span
              style={{
                color: "green",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial, sans-serif",
              }}
            >
              l
            </span>
            <span
              style={{
                color: "red",
                fontWeight: "500",
                fontSize: "22px",
                marginRight: "10px",
                fontFamily: "'Product Sans',Arial, sans-serif",
              }}
            >
              e
            </span>
            <span
              style={{
                color: "#5f6368",
                fontWeight: "500",
                fontSize: "22px",
                fontFamily: "'Product Sans',Arial, sans-serif",
              }}
            >
              Forms
            </span>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{ marginLeft: "08px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <img
            src={docs}
            style={{ height: "27px", width: "20px" }}
            alt="docs"
          />
          <div className={classes.listItem}>Docs</div>
        </ListItem>
        <ListItem className="list_item">
          <img
            src={sheets}
            style={{ height: "27px", width: "20px" }}
            alt="docs"
          />
          <div className={classes.listItem}>Sheets</div>
        </ListItem>
        <ListItem className="list_item">
          <img
            src={slides}
            style={{ height: "27px", width: "20px" }}
            alt="docs"
          />
          <div className={classes.listItem}>Slides</div>
        </ListItem>
        <ListItem className="list_item">
          <img
            src={logo}
            style={{ height: "27px", width: "20px" }}
            alt="docs"
          />
          <div className={classes.listItem}>Forms</div>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{
          marginLeft: "08px",
          marginRight: "08px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <ListItem className="list_item">
          <FiSettings style={{ marginRight: "7px", fontSize: "20px" }} />
          <div style={{ fontSize: "14px" }}>Settings</div>
        </ListItem>
        <ListItem className="list_item">
          <BsQuestionCircle style={{ marginRight: "7px", fontSize: "20px" }} />
          <div>Help & Feedback</div>
        </ListItem>
      </List>
      <Divider />
      <List
        style={{
          marginLeft: "08px",
          marginRight: "08px",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <ListItem className="list_item">
          <img
            src={drive}
            style={{ height: "27px", width: "27px" }}
            alt="docs"
          />
          <div className={classes.listItem}>Drive</div>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MenuIcon style={{ color: "#ffff" }} />
        </IconButton>
        <Drawer
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </Fragment>
    </div>
  );
}

export default TemporaryDrawer;
