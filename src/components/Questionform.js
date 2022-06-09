import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import CloseIcon from "@material-ui/icons/Close";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DnsIcon from "@material-ui/icons/Dns";
import ShortTextIcon from "@material-ui/icons/ShortText";
import SubjectIcon from "@material-ui/icons/Subject";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { BsTrash, BsFileText } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";
import FilterNoneIcon from "@material-ui/icons/FilterNone";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import OndemandVideoRoundedIcon from "@material-ui/icons/OndemandVideoRounded";
import TextFieldsRoundedIcon from "@material-ui/icons/TextFieldsRounded";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

//import SaveIcon from "@material-ui/icons/Save";
import {
  Select,
  Switch,
  IconButton,
  Button,
  Radio,
  FormControlLabel,
  AccordionDetails,
  Typography,
  AccordionSummary,
  Accordion,
  MenuItem,
} from "@material-ui/core";
import "./Question_form.css";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import axios from "axios";

function Questionform() {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which is the capital city of Karnataka ?",
      questionType: "radio",
      options: [
        { optionText: "Bengaluru" },
        { optionText: "Kolkata" },
        { optionText: "Delhi" },
        { optionText: "Goa" },
      ],
      answer: false,
      answerKey: "",
      open: true,
      required: false,
    },
  ]);

  let { id } = useParams();
  const [documentName, setDocName] = useState("Untitled Document");
  const [documentDescription, setDocDesc] = useState("Add Description");
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    async function data_adding() {
      var request = await axios.get(`http://localhost:5000/data/${id}`);
      let question_data = request.data.questions;
      console.log(question_data);
      let doc_name = request.data.document_name;
      let doc_descip = request.data.doc_desc;
      console.log(doc_name + " " + doc_descip);
      setDocName(doc_name);
      setDocDesc(doc_descip);
      setQuestions(question_data);
      dispatch({
        type: actionTypes.SET_DOC_NAME,
        doc_name: doc_name,
      });

      dispatch({
        type: actionTypes.SET_DOC_DESC,
        doc_desc: doc_descip,
      });
      dispatch({
        type: actionTypes.SET_QUESTIONS,
        questions: question_data,
      });
    }
    data_adding();
  }, [dispatch, id]);

  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log("Type : ", type);
    qs[i].questionType = type;

    setQuestions(qs);
  }

  function handleOptionValue(text, i, j) {
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].options[j].optionText = text;
    setQuestions(optionsOfQuestion);
    console.log(optionsOfQuestion);
  }

  function removeOption(i, j) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion);
      console.log(i + "__" + j);
    }
  }

  function copyQuestion(i) {
    //expandCloseAll();
    let qs = [...questions];
    var newQuestion = { ...qs[i] };

    setQuestions([...questions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  }

  function addMoreQuestionField() {
    expandCloseAll();

    setQuestions((questions) => [
      ...questions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        points: 0,
        open: true,
        required: false,
      },
    ]);
    console.log("Clicked on add icon.");
  }

  function requiredQuestion(i) {
    var requiredQuestion = [...questions];

    requiredQuestion[i].required = !requiredQuestion[i].required;

    setQuestions(requiredQuestion);
  }

  function addOption(i) {
    var optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Option " + (optionsOfQuestion[i].options.length + 1),
      });
    } else {
      console.log("Max  5 options ");
    }
    //console.log(optionsOfQuestion);
    setQuestions(optionsOfQuestion);
  }

  function setOptionAnswer(ans, qno) {
    var Questions = [...questions];

    Questions[qno].answer = ans;

    setQuestions(Questions);
    console.log(qno + " " + ans);
  }

  function setOptionPoints(points, qno) {
    var Questions = [...questions];

    Questions[qno].points = points;

    setQuestions(Questions);
    console.log(qno + " " + points);
  }

  function doneAnswer(i) {
    var answerOfQuestion = [...questions];

    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

    setQuestions(answerOfQuestion);
  }

  function addAnswer(i) {
    var answerOfQuestion = [...questions];

    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

    setQuestions(answerOfQuestion);
  }

  function handleQuestionValue(text, i) {
    var optionsOfQuestion = [...questions];
    optionsOfQuestion[i].questionText = text;
    setQuestions(optionsOfQuestion);
    console.log("Question : ", optionsOfQuestion);
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    var itemgg = [...questions];
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setQuestions(itemF);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  function expandCloseAll() {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  }

  function handleExpand(i) {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;
      } else {
        qs[j].open = false;
      }
    }
    setQuestions(qs);
  }

  function commitToDB() {
    dispatch({
      type: actionTypes.SET_QUESTIONS,
      questions: questions,
    });

    axios.post(`http://localhost:5000/add_quetions/${id}`, {
      document_name: documentName,
      doc_desc: documentDescription,
      questions: questions,
    });
  }

  function questionsUI() {
    return questions.map((ques, i) => (
      <Draggable key={i} draggableId={i + "id"} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div style={{ marginBottom: "0px" }}>
                <div style={{ width: "100%", marginBottom: "0px" }}>
                  <DragIndicatorIcon
                    style={{
                      transform: "rotate(-90deg)",
                      color: "#DAE0E2",
                      position: "relative",
                      left: "350px",
                      alignItems: "center",
                    }}
                    fontSize="small"
                  />
                </div>

                <Accordion
                  onChange={() => {
                    handleExpand(i);
                  }}
                  expanded={questions[i].open}
                  className={questions[i].open ? "add_border" : ""}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    elevation={1}
                    style={{ width: "100%" }}
                  >
                    {!questions[i].open ? (
                      <div className="saved_questions">
                        <Typography
                          style={{
                            fontSize: "15px",
                            fontWeight: "400",
                            letterSpacing: ".1px",
                            lineHeight: "24px",
                            paddingBottom: "8px",
                          }}
                        >
                          {i + 1}. {ques.questionText}
                        </Typography>

                        {ques.options.map((op, j) => (
                          <div key={j}>
                            <div style={{ display: "flex" }}>
                              <FormControlLabel
                                style={{
                                  marginLeft: "5px",
                                  marginBottom: "5px",
                                }}
                                disabled
                                control={
                                  <input
                                    type={ques.questionType}
                                    color="primary"
                                    style={{ marginRight: "3px" }}
                                    required={ques.type}
                                  />
                                }
                                label={
                                  <Typography
                                    style={{
                                      fontFamily: " Roboto,Arial,sans-serif",
                                      fontSize: " 15px",
                                      fontWeight: "500",
                                      letterSpacing: ".2px",
                                      lineHeight: "20px",
                                      color: "#333",
                                      marginLeft: "5px",
                                    }}
                                  >
                                    {ques.options[j].optionText}
                                  </Typography>
                                }
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      ""
                    )}
                  </AccordionSummary>
                  <div className="question_boxes">
                    {!ques.answer ? (
                      <AccordionDetails className="add_question">
                        <div>
                          <div className="add_question_top">
                            <input
                              type="text"
                              className="question"
                              placeholder="Question"
                              value={ques.questionText}
                              onChange={(e) => {
                                handleQuestionValue(e.target.value, i);
                              }}
                            ></input>

                            <Select
                              className="select"
                              style={{ color: "#5f6368", fontSize: "13px" }}
                            >
                              <MenuItem
                                id="text"
                                value="Text"
                                onClick={() => {
                                  addQuestionType(i, "text");
                                }}
                              >
                                <SubjectIcon style={{ marginRight: "10px" }} />
                                Paragraph
                              </MenuItem>

                              <MenuItem
                                id="checkbox"
                                value="Checkbox"
                                onClick={() => {
                                  addQuestionType(i, "checkbox");
                                }}
                              >
                                <CheckBoxIcon
                                  style={{
                                    marginRight: "10px",
                                    color: "#70757a",
                                  }}
                                  checked
                                />{" "}
                                Checkboxes
                              </MenuItem>
                              <MenuItem
                                id="radio"
                                value="Radio"
                                onClick={() => {
                                  addQuestionType(i, "radio");
                                }}
                              >
                                {" "}
                                <Radio
                                  style={{
                                    marginLeft: "-9px",
                                    marginRight: "2px",
                                    color: "#70757a",
                                  }}
                                  checked
                                />{" "}
                                Multiple Choice
                              </MenuItem>
                            </Select>
                          </div>

                          {ques?.options.length > 0 &&
                            ques.options.map((op, j) => (
                              <div className="add_question_body" key={j}>
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  {ques.questionType !== "text" ? (
                                    <input
                                      className="question_text_input"
                                      type={ques.questionType}
                                      style={{ marginRight: "10px" }}
                                    />
                                  ) : (
                                    <ShortTextIcon
                                      style={{ marginRight: "10px" }}
                                    />
                                  )}

                                  <input
                                    type="text"
                                    className="text_input"
                                    placeholder="option"
                                    value={ques.options[j].optionText}
                                    onChange={(e) => {
                                      handleOptionValue(e.target.value, i, j);
                                    }}
                                  ></input>
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <CropOriginalIcon
                                    style={{ color: "#5f6368" }}
                                  />

                                  <IconButton
                                    aria-label="delete"
                                    onClick={() => {
                                      removeOption(i, j);
                                    }}
                                  >
                                    <CloseIcon />
                                  </IconButton>
                                </div>
                              </div>
                            ))}

                          {ques.options.length < 5 ? (
                            <div className="add_question_body">
                              <FormControlLabel
                                disabled
                                control={
                                  ques.questionType !== "text" ? (
                                    <input
                                      type={ques.questionType}
                                      color="primary"
                                      inputProps={{
                                        "aria-label": "secondary checkbox",
                                      }}
                                      style={{
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                      }}
                                      disabled
                                    />
                                  ) : (
                                    <ShortTextIcon
                                      style={{ marginRight: "10px" }}
                                    />
                                  )
                                }
                                label={
                                  <>
                                    <input
                                      type="text"
                                      className="text_input"
                                      style={{
                                        fontSize: "13px",
                                        width: "65px",
                                      }}
                                      placeholder="Add other"
                                    ></input>
                                    <Button
                                      size="small"
                                      onClick={() => {
                                        addOption(i);
                                      }}
                                      style={{
                                        textTransform: "none",
                                        color: "#4285f4",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      Add Option
                                    </Button>
                                  </>
                                }
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="add_footer">
                            <div className="add_question_bottom_left">
                              <Button
                                className="leftPadding"
                                size="small"
                                onClick={() => {
                                  addAnswer(i);
                                }}
                                style={{
                                  textTransform: "none",
                                  color: "#4285f4",
                                  fontSize: "13px",
                                  fontWeight: "600",
                                }}
                              >
                                {" "}
                                <FcRightUp
                                  style={{
                                    border: "2px solid #4285f4",
                                    padding: "2px",
                                    marginRight: "8px",
                                  }}
                                />{" "}
                                Answer key
                              </Button>
                            </div>

                            <div className="add_question_bottom">
                              <IconButton
                                aria-label="Copy"
                                data-toggle="tooltip"
                                data-placement="top"
                                style={{ color: "rgb(98, 91, 91)" }}
                                title={"Copy question"}
                                onClick={() => {
                                  copyQuestion(i);
                                }}
                              >
                                <FilterNoneIcon />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                data-toggle="tooltip"
                                data-placement="top"
                                style={{ color: "rgb(98, 91, 91)" }}
                                title={"Delete question"}
                                onClick={() => {
                                  deleteQuestion(i);
                                }}
                              >
                                <BsTrash />
                              </IconButton>
                              <div>
                                <span
                                  style={{
                                    color: "#333",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                  }}
                                >
                                  Required
                                </span>
                                <Switch
                                  name="checkedA"
                                  color="primary"
                                  checked={ques.required}
                                  onClick={() => {
                                    requiredQuestion(i);
                                  }}
                                />
                              </div>

                              <IconButton>
                                <MoreVertIcon />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    ) : (
                      <AccordionDetails className="add_question">
                        <div className="top_header">Choose Correct Answer</div>
                        <div>
                          <div className="add_question_top">
                            <input
                              type="text"
                              className="question "
                              placeholder="Question"
                              value={ques.questionText}
                              onChange={(e) => {
                                handleQuestionValue(e.target.value, i);
                              }}
                              disabled
                            />
                            <input
                              type="number"
                              className="points"
                              min="0"
                              step="1"
                              placeholder="0"
                              onChange={(e) => {
                                setOptionPoints(e.target.value, i);
                              }}
                            />
                          </div>

                          {ques.options.map((op, j) => (
                            <div
                              className="add_question_body"
                              key={j}
                              style={{
                                marginLeft: "8px",
                                marginBottom: "10px",
                                marginTop: "5px",
                              }}
                            >
                              <div key={j}>
                                <div style={{ display: "flex" }} className="">
                                  <div className="form-check">
                                    <label
                                      style={{ fontSize: "13px" }}
                                      onClick={() => {
                                        setOptionAnswer(
                                          ques.options[j].optionText,
                                          i
                                        );
                                      }}
                                    >
                                      {ques.questionType !== "text" ? (
                                        <input
                                          type={ques.questionType}
                                          name={ques.questionText}
                                          value="option3"
                                          className="form-check-input"
                                          required={ques.required}
                                          style={{
                                            marginRight: "10px",
                                            marginBottom: "10px",
                                            marginTop: "5px",
                                          }}
                                        />
                                      ) : (
                                        <ShortTextIcon
                                          style={{ marginRight: "10px" }}
                                        />
                                      )}

                                      {ques.options[j].optionText}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="add_question_body">
                            <Button
                              size="small"
                              style={{
                                textTransform: "none",
                                color: "#4285f4",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              {" "}
                              <BsFileText
                                style={{
                                  fontSize: "20px",
                                  marginRight: "8px",
                                }}
                              />
                              Add Answer Feedback
                            </Button>
                          </div>

                          <div className="add_question_bottom">
                            <Button
                              variant="outlined"
                              color="primary"
                              style={{
                                textTransform: "none",
                                color: "#4285f4",
                                fontSize: "12px",
                                marginTop: "12px",
                                fontWeight: "600",
                              }}
                              onClick={() => {
                                doneAnswer(i);
                              }}
                            >
                              Done
                            </Button>
                          </div>
                        </div>
                      </AccordionDetails>
                    )}
                    {!ques.answer ? (
                      <div className="question_edit">
                        <AddCircleOutlineRoundedIcon
                          data-toggle="tooltip"
                          data-placement="top"
                          title={"Add question"}
                          onClick={addMoreQuestionField}
                          className="edit"
                        />
                        <OndemandVideoRoundedIcon className="edit" />
                        <CropOriginalIcon className="edit" />
                        <TextFieldsRoundedIcon className="edit" />
                        <DnsIcon className="edit" />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    ));
  }

  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black", marginBottom: "10px" }}
                placeholder="Untitled Document"
                onChange={(e) => {
                  setDocName(e.target.value);
                }}
              />
              <input
                type="text"
                className="question_form_top_desc"
                placeholder="Form description"
                onChange={(e) => {
                  setDocDesc(e.target.value);
                }}
              />
            </div>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {questionsUI()}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="save_form">
            <Button
              variant="contained"
              color="primary"
              onClick={commitToDB}
              style={{ fontSize: "14px" }}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questionform;
