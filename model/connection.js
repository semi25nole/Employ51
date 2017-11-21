// Dependencies
var Sequelize = require("sequelize");

var pass = '';

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("db51", "root", pass, {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

//Checking connection status
sequelize.authenticate().complete(function(err) {
    if (err) {
        console.log('There is connection in ERROR: ' + err);
    } else {
        console.log('Connection has been established successfully');
    }
});

// Exports the connection for other files to use
module.exports = sequelize;