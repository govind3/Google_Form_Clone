import React from "react";
import "./Tabs.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    fontSize: 12,
    color: "#5f6368",
    textTransform: "capitalize",
    height: 10,
    fontWeight: "600",
    fontFamily: "Google Sans, Roboto, Arial, sans-serif",
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
        <Tab label="Questions" className={classes.tab}></Tab>
        <Tab label="Responses" className={classes.tab}></Tab>
      </Tabs>
    </Paper>
  );
}

export default Centeredtabs;
