// Variables defined for connection use
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "E122w920!",
    database: "burgers_db"
});

// This makes the connection from Node to MySQL
connection.connect(function(err) {
    if (err) {
        console.error("Error connectiong" + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadID);
});

//Export connection for ORM use
module.exports = connection;