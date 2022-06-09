import React from "react";
import { Typography } from "@material-ui/core";

import "./user_form.css";
function SubmitForm() {
  return (
    <div className="submit">
      <div className="user_form">
        <div className="user_form_section">
          <div className="user_title_section">
            <Typography
              style={{
                fontSize: "26px",
                fontFamily: "'Google Sans','Roboto','Arial','sans-serif'",
              }}
            >
              Untitled Form
            </Typography>
            <br></br>
            <Typography style={{ fontSize: "13px", fontWeight: "400" }}>
              Your response has been recorded.
            </Typography>
            <br></br>
            <a href="#" style={{ fontSize: "13px" }}>
              Submit another response
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitForm;
