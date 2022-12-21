const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
        host: "localhost",
        port: "3001",
        user: "root",
        password: "passofword",
        database: "companyDatabase",
    },
    console.log(`Connected to the companyDatabase.`)
);

connection.connect(function (err) {
    if(err) throw err;
});
module.exports = connection;