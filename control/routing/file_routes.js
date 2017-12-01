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

    // app.get("/user", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../../view/public/user.html"));
    // });

    app.get("/testjames", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/test_james.html")); //TODO: remove before going live
    });

    app.get("/testkyle", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/test_kyle.html")); //TODO: remove before going live
    });



};