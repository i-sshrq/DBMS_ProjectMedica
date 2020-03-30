const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db_connector.js");
const hash_to_patient_ID = require("./hashes");

let queries = [];
let connection;
let connected = false;
let results;
let connect_to_database = async function() {
  connection = await db.start_connection("R_201814023", "home54963");
  await (function setConn() {
    connected = true;
    console.log("connected");
  })();
};

//ALWAYS CHECK connected BOOLEAN BEFORE DB ACCESS

let execute_queries = async function(q) {
  try {
    if (!connected) {
      await connect_to_database();
      results = await db.executeQueries(q);
      return results;
    } else {
      results = await db.executeQueries(q);
      return results;
    }
  } catch (err) {
    if (err.toString().includes("unique constraint")) {
      console.log("\n[Unique key conflicts with existing data!]");
    } else console.log(err);
  }
};

let pages = __dirname + "/pages/";
app.use(express.static(__dirname + "/public/resources/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let page = __dirname + "/public/pages/index.html";
  console.log("Landing page");
  console.log(page);
  res.sendFile(page);
});

app.post("/updatePatient", (req, res) => {
  let formData = req.body;
  let trueDataKeys = [];
  let trueDataValues = [];
  let patient_ID = "";
  for (let x in formData) {
    if (x == "birth_reg") patient_ID = hash_to_patient_ID(formData[x]);
    if (x == "patient_dob") {
      let temp = formData[x].split("-");
      let date = new Date(temp[0], temp[1] - 1, temp[2]);
      formData[x] =
        temp[2] +
        "-" +
        date.toLocaleString("default", { month: "short" }) +
        "-" +
        temp[0].slice(1, 3);
    }

    if (formData[x] != "") {
      trueDataKeys.push(x);
      trueDataValues.push("'" + formData[x] + "'");
    }
  }
  let string_1 = "insert into patient(";
  let string_2 = "";
  let string_3 = "";
  let string_4 = "";

  string_2 = "patient_ID," + trueDataKeys.toString();
  string_3 = ") values (";
  string_4 = "'" + patient_ID + "'," + trueDataValues.toString() + ")";

  //console.log(string_1 + string_2 + string_3 + string_4);

  let queries = [string_1 + string_2 + string_3 + string_4];
  queries.push("commit");
  execute_queries(queries).then(result => {
    console.log(result);
    res.send("<h1>Successfuly added a new Patient to DB</h1>");
  });
});

app.get("/getPatients", (req, res) => {
  queries.push("select * from patient");
  console.log(queries);
  execute_queries(queries)
    .then(response => {
      res.send(response);
    })
    .then(x => {
      queries = [];
    });
});

app.get("/update", (req, res) => {
  let page = pages + "technician/UpdatePatient.html";
  res.sendFile(page);
});

app.get("/show", (req, res) => {
  let page = pages + "technician/showPatients.html";
  res.sendFile(page);
});

app.listen(3000);
