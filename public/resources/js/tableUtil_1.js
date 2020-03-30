const table_head = document.getElementById("patients_table_head");
const table_body = document.getElementById("patients_table_body");

let theads = [];
let trows = [];

fetch("/getPatients")
  .then(response => {
    return response.json();
  })
  .then(data => {
    headings = data[0]["metaData"];
    rows = data[0]["rows"];
    for (let h of headings) {
      theads.push(h["name"]);
    }
    return rows;
  })
  .then(rows => {
    trows = rows;
    console.log(trows);
  })
  .then(() => {
    for (let h of theads) {
      let temp = document.createElement("th");
      let elem = document.createElement("div");
      let par = document.createElement("p");
      elem.className = "container";
      par.innerHTML = h;
      elem.appendChild(par);
      temp.appendChild(elem);
      table_head.appendChild(temp);
    }
  })
  .then(() => {
    for (let row of trows) {
      let eachRow = document.createElement("tr");
      for (let col of row) {
        let temp = document.createElement("td");
        let elem = document.createElement("div");
        let par = document.createElement("p");
        elem.className = "container";
        par.innerHTML = col;
        elem.appendChild(par);
        temp.appendChild(elem);
        eachRow.appendChild(temp);
      }
      table_body.appendChild(eachRow);
    }
  });
