var path = require("path");
module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../../view/public/home.html"));
        //__dirname + '/../config/config.json'
    });

    // app.get("/survey", function(req, res) {
    //     res.sendFile(path.join(__dirname, ""));
    // });

    // app.get("/js", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../server.js"));
    // });

};