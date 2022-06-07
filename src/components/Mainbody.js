import React from "react";
import StorageIcon from "@material-ui/icons/Storage";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import { IconButton } from "@material-ui/core";
import "./Mainbody.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import doc from "../images/3.PNG";

function Mainbody() {
  return (
    <div className="main_body">
      <div className="mainbody_top">
        <div
          className="mainbody_top_left"
          style={{ fontSize: "16px", fontWeight: "500" }}
        >
          Recent forms
        </div>
        <div className="mainbody_top_right">
          <div
            className="mainbody_top_center"
            style={{ fontSize: "14px", marginRight: "125px" }}
          >
            Owned by anyone <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "20px", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "23px", color: "black" }} />
          </IconButton>
        </div>
      </div>
      <div className="mainbody_docs">
        <div className="doc_card">
          <img src={doc} className="doc_image" alt="Body" />
          <div className="doc_card_content">
            {/* <h4></h4> */}
            <div
              className="doc_content"
              style={{ fontSize: "12px", color: "grey" }}
            >
              <div className="content-left">
                <StorageIcon
                  style={{
                    color: "white",
                    fontSize: "12px",
                    backgroudColor: "#6E2594",
                    padding: "3px",
                    marginRight: "3px",
                    borderRadius: "2px",
                  }}
                />
              </div>
              <MoreVertIcon style={{ fontSize: "16px", color: "grey" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainbody;
