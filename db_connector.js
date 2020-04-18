var Sequelize = require("sequelize-oracle");
var db = new Sequelize("XE", "R_201814023", "home54963", {
  database: "XE",
  username: "R_201814023",
  password: "home54963",
  host: "127.0.0.1",
  port: "1521",
  pool: {
    maxConnections: 5,
    maxIdleTime: 3000,
  },
  dialect: "oracle",
  logging: console.log,
});

const checkAuth = async function checkAuth() {
  try {
    await db.authenticate();
    console.log("Connected to db");
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const sendRawQuery = async function sendRawQuery(s) {
  const [results, metadata] = await db.query(s);
  console.log(metadata);
};

module.exports = { checkAuth, db, sendRawQuery };
