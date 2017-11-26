//entry point for application
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("view/public")); // Static directory


//Routes
require("./control/routing/file_routes.js")(app); //page routes
require("./control/routing/user_routes.js")(app);
require("./control/routing/job_routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    // Starts the server to begin listening
    app.listen(PORT, function() {
        console.log("Employ51 App listening on PORT " + PORT);
    });
<<<<<<< HEAD
});
=======
<<<<<<< HEAD
});
=======
});
=======
//routes
>>>>>>> create-account
>>>>>>> c8b436d4c900ca00f7d781d96848d80f891db0a2
>>>>>>> 7138cf1fdd3ba51406b177d986c1d2bf2c03e020
