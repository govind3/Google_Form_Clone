import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
// import logo from "../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../images/avatar.jpg";
import TemporaryDrawer from "./TemporaryDrawer";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
        <TemporaryDrawer />
        {/* <img
          src={logo}
          alt="form logo"
          style={{ height: "40px", backgroundColor: "black" }}
        /> */}
        <div className="info">Forms</div>
      </div>
      <div className="header_search">
        <IconButton>
          <SearchIcon style={{ color: "#333", fontSize: "30PX" }} />
        </IconButton>
        <input type="text" name="search" placeholder="Search..." />
      </div>
      <div className="header_right">
        <IconButton style={{ color: "#ffff" }}>
          <AppsIcon style={{ color: "#ffff" }} />
        </IconButton>
        <IconButton>
          <Avatar src={avatar} alt="avatar" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
