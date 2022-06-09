import React from "react";
import "./Tabs.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab1: {
    fontSize: 13.5,
    color: "rgb(103, 58, 183)",
    textTransform: "capitalize",
    height: 10,
    fontWeight: "600",
    fontFamily: "Arial, sans-serif",
    borderBottom: "4px solid rgb(103, 58, 183)",
    borderRadius: "5px",
  },
  tab: {
    fontSize: 15,
    color: "#333",
    textTransform: "capitalize",
    height: 10,
    fontWeight: "600",
    fontFamily: "Serif",
  },
  tabs: {
    height: 10,
  },
});
function Centeredtabs() {
  const classes = useStyle();
  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.tabs}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        <Tab label="Questions" className={classes.tab1}></Tab>
        <Tab label="Responses" className={classes.tab}></Tab>
      </Tabs>
    </Paper>
  );
}

export default Centeredtabs;
