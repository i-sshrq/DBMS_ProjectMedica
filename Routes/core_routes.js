const express = require("express");
const routes = express();

routes.get("/", (req, res) => {
  let page = __dirname + "/public/pages/index.html";
  console.log("Landing page");
  console.log(page);
  res.sendFile(page);
});

// TODO: USE SEQUELIZE TO SEND INSERT VIA MODEL
routes.post("/updatePatient", (req, res) => {
  // let formData = req.body;
  // let trueDataKeys = [];
  // let trueDataValues = [];
  // let patient_ID = "";
  // for (let x in formData) {
  //   if (x == "birth_reg") patient_ID = hash_to_patient_ID(formData[x]);
  //   if (x == "patient_dob") {
  //     let temp = formData[x].split("-");
  //     let date = new Date(temp[0], temp[1] - 1, temp[2]);
  //     formData[x] =
  //       temp[2] +
  //       "-" +
  //       date.toLocaleString("default", { month: "short" }) +
  //       "-" +
  //       temp[0].slice(1, 3);
  //   }
  //   if (formData[x] != "") {
  //     trueDataKeys.push(x);
  //     trueDataValues.push("'" + formData[x] + "'");
  //   }
  // }
  // let string_1 = "insert into patient(";
  // let string_2 = "";
  // let string_3 = "";
  // let string_4 = "";
  // string_2 = "patient_ID," + trueDataKeys.toString();
  // string_3 = ") values (";
  // string_4 = "'" + patient_ID + "'," + trueDataValues.toString() + ")";
  // //console.log(string_1 + string_2 + string_3 + string_4);
  // let queries = [string_1 + string_2 + string_3 + string_4];
  // queries.push("commit");
  // execute_queries(queries).then((result) => {
  //   console.log(result);
  //   res.send("<h1>Successfuly added a new Patient to DB</h1>");
  // });
});

// TODO: Find a way to fetch patients with select, ignore if no better way exists
routes.get("/getPatients", (req, res) => {
  queries.push("select * from patient");
  console.log(queries);
  execute_queries(queries)
    .then((response) => {
      res.send(response);
    })
    .then((x) => {
      queries = [];
    });
});

routes.get("/update", (req, res) => {
  let page = pages + "technician/UpdatePatient.html";
  res.sendFile(page);
});

routes.get("/show", (req, res) => {
  let page = pages + "technician/showPatients.html";
  res.sendFile(page);
});
