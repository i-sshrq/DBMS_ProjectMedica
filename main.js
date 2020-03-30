const db = require('./db_connector.js');
let queries = [""];
let connection;
let connected = false;
let results;
let connect_to_database = async function(){
    connection = await db.start_connection("R_201814023", "home54963");
    await (function setConn(){ connected = true; })();
};

//ALWAYS CHECK connected BOOLEAN BEFORE DB ACCESS

let execute_queries = async function(q){
    if(!connected){
        await connect_to_database();
        return;
    }
    else{
        await db.executeQueries(q);
    }
}

execute_queries(queries);

