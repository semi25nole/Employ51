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

// Exports the connection for other files to use
module.exports = sequelize;