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
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Formheader.css";

function Formheader() {
  const navigate = useNavigate();
  const [{ doc_name }] = useStateValue();
  //const { id } = useParams();

  function navigates() {
    navigate("/response");
  }

  return (
    <div className="form_header">
      <div className="form_header_left">
        <Link to="/">
          <img
            src={logo}
            style={{ height: "40px", width: "30px" }}
            alt="logo"
          />
        </Link>
        <input
          type="text"
          placeholder="Untitled Form"
          value={doc_name}
          className="form_name"
        />
        <IoMdFolderOpen
          className="form_header_icon"
          style={{ marginLeft: "10px", marginRight: "12px", fontSize: "24px" }}
        ></IoMdFolderOpen>
        <FiStar
          className="form_header_icon"
          style={{ marginRight: "12px", fontSize: "23px" }}
        />
        <span style={{ fontSize: "13px", fontWeight: "600" }}>
          All changes saved in drive
        </span>
      </div>
      <div className="form_header_right">
        <IconButton>
          <ColorLensIcon size="small" className="form_header_icon" />
        </IconButton>
        <IconButton onClick={navigates}>
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
