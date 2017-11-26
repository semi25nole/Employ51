//Grab the models folder
var db = require("../../models");

//Routes
module.exports = function(app) {

    // Find all Users and return them to the user with res.json
    app.get("/api/users", function(req, res) {
        db.User.findAll({}).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    app.get("/api/users/:uid", function(req, res) {
        // Find one User with the id in req.params.id and return them to the user with res.json
        db.User.findOne({
            where: {
                uid: req.params.uid
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });



};