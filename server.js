//entry point for application
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("view/public"));

// Routes
require("./control/routing/file_routes.js")(app);
require("./control/routing/user_routes.js")(app);
require("./control/routing/job_routes.js")(app);

// Starts the server to begin listening

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("Employ51 App listening on PORT " + PORT);
    });
});