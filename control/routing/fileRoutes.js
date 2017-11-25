var path = require("path");
module.exports = function(app) {

    //routes:
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/home.html")); //base page
    });

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/home.html")); //base page
    });

    app.get("/hr", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/HR.html"));
    });

    app.get("/user", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/user.html"));
    });

    app.get("/test", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/test.html")); //TODO: remove before going live
    });



    // app.get("/survey", function(req, res) {
    //     res.sendFile(path.join(__dirname, ""));
    // });

    // app.get("/js", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../server.js"));
    // });

};