const mysql = require("mysql");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "passofword",
        database: "employeeTracker_db",
    },
    console.log(`Connected to the employeeTracker_db.`)
);

connection.connect(function (err) {
    if(err) throw err;
});
module.exports = connection;