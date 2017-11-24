var path = require("path");
module.exports = function(app) {


    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/home.html"));
    });

    // app.get("/survey", function(req, res) {
    //     res.sendFile(path.join(__dirname, ""));
    // });

    // app.get("/js", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../server.js"));
    // });

};