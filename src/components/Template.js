import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import { IconButton } from "@material-ui/core";
import "./Template.css";

import blank from "../images/1.PNG";
import party from "../images/2.PNG";
import contact from "../images/3.PNG";
import rsvp from "../images/4.PNG";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Template() {
  const navigate = useNavigate();

  function createForm() {
    const id = uuid();
    console.log(id);

    let questions_list = [
      {
        questionText: "Question",
        questionType: "radio",
        answer: false,
        answerText: " ",
        points: 0,
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ];

    axios.post(`http://localhost:5000/add_quetions/${id}`, {
      document_name: "untitled_form",
      doc_desc: "Add Description",
      questions: questions_list,
    });

    navigate("/form/" + id);
  }

  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "16px", color: "#202124" }}>
            Start a new form
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template gallery
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={blank} alt="noimage" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card">
          <img src={contact} alt="noimage" className="card_image" />
          <p className="card_title">Contact Information</p>
        </div>
        <div className="card">
          <img src={rsvp} alt="noimage" className="card_image" />
          <p className="card_title">RSVP</p>
        </div>
        <div className="card">
          <img src={party} alt="noimage" className="card_image" />
          <p className="card_title">Party Invite</p>
        </div>
      </div>
    </div>
  );
}

export default Template;
