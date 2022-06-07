import React from "react";
import logo from "../images/logo.png";
import avatar from "../images/avatar.jpg";
import { Avatar } from "@material-ui/core";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { IconButton } from "@material-ui/core";
import { IoMdFolderOpen } from "react-icons/io";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import { Button } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./Formheader.css";

function Formheader() {
  return (
    <div className="form_header">
      <div className="form_header_left">
        <img src={logo} style={{ height: "30px", width: "20px" }} alt="logo" />
        <input
          type="text"
          placeholder="Untitled form"
          // value="Untitled form"
          className="form_name"
        />
        <IoMdFolderOpen
          className="form_header_icon"
          style={{ marginRight: "10px" }}
        ></IoMdFolderOpen>
        <FiStar className="form_header_icon" style={{ marginRight: "10px" }} />
        <span style={{ fontSize: "12px", fontWeight: "600" }}>
          All changes saves in drive
        </span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <ColorLensIcon size="small" className="form_header_icon" />
        </IconButton>
        <IconButton>
          <AiOutlineEye className="form_header_icon" />
        </IconButton>
        <IconButton>
          <FiSettings className="form_header_icon" />
        </IconButton>
        <Button variant="contained" color="primary" href="#conatined-buttons">
          Send
        </Button>
        <IconButton>
          <MoreVertIcon className="form_header_icon" />
        </IconButton>
        <IconButton>
          <Avatar style={{ height: "40px", width: "40px" }} src={avatar} />
        </IconButton>
      </div>
    </div>
  );
}

export default Formheader;
