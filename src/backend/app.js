const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Excel = require("exceljs");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-with, Content-Type, Accept"
  );
  next();
});

app.post(`/add_quetions/:doc_id`, (req, res) => {
  var docs_data = req.body;
  var name = req.params.doc_id;
  console.log(docs_data);
  let data = JSON.stringify(docs_data);
  fs.writeFileSync(`files/${name}.json`, data);
});

app.get("/data/:doc_id", (req, res) => {
  var docId = req.params.doc_id;
  fs.readFile(`files/${docId}.json`, (err, data) => {
    if (err) throw err;
    let ques_data = JSON.parse(data);
    console.log(req.params.doc_id);
    res.send(ques_data);
  });
});

const path = require("path");

app.get("/get_all_filenames", (req, res) => {
  const directoryPath = path.join(__dirname, "/files");

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: ", +err);
    }
    res.send(files);
  });
});

app.post("/student_response/:doc_id", (req, res) => {
  var docs_data = req.body;
  var name = req.params.doc_id;
  var d = new Date();
  let workbook = new Excel.Workbook();
  var data = req.body.answer_data;
  let worksheet = workbook.addWorksheet(`${name}`);

  worksheet.columns = [
    { header: "Time Stamp", key: "detetime" },
    ...docs_data.columns,
  ];
  workbook.columns.forEach((column) => {
    column.width = column.header.length < 12 ? 12 : column.header.length;
  });

  worksheet.getRow(1).font = { bold: true };

  data.forEach((e, index) => {
    const rowIndex = index + 2;
    worksheet.addRow({
      d,
      ...e,
    });
  });
  workbook.xlsx.writeFile(`${name}.xlsx`);
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
