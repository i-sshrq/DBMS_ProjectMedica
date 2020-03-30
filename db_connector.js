const odbc = require("oracledb");
let connection;

async function start_connection(username, password) {
  connected = false;
  if (connected) return;
  try {
    connection = await odbc.getConnection({
      user: username,
      password: password,
      connectString: "localhost/XE"
    });
  } catch (exception) {
    //console.log("Could not connect to DB");
    console.log(exception);
  }
}

async function executeQueries(sql) {
  const results = [];

  for (const s of sql) {
    console.log("executing : " + s);
    const result = await connection.execute(s);
    results.push(result);
  }
  return results;
}

module.exports = {
  start_connection,
  executeQueries
};
