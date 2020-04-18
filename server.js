const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const hash_to_patient_ID = require("./hashes");
const dbUtils = require("./db_connector");
const { checkAuth, db, sendRawQuery } = dbUtils;

checkAuth();

// Serving static files and initiating body parser for form data extraction
let pages = __dirname + "/pages/";
app.use(express.static(__dirname + "/public/resources/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES

app.listen(3000);
