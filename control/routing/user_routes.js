//Grab the models folder
var db = require("../../models");

//Routes
module.exports = function(app) {

    //AUTHENTICATION: 

    //authentication (new and existing users)
    //use post to request information (with qualifiers)
    app.post("/api/auth", function(req, res) {
        //INPUT:
        // object - example: {email: "bigonet1@mit.edu", pass: "Q3OiMPsw5f"}

        //OUTPUT:
        // If match (valid), returns object:
        // example: {fname: "Bucky", lname: "Igonet", id: 2}
        // Use: having the id available allows middleware to store id locally and use in a request, which will determine what the user sees (hr will see company info and job seeker will see searches in other routes)

        // if not match returns null object
        //example: {fname: null, lname: null, id: null}
        // Use: if null, then the middleware can prompt user to sign up or try again.


        //validation fields
        var username = null;
        var password = null;
        var fname = null;
        var lname = null;
        var id = null;

        //object of search results to validate or not
        var resultObject = {
            fname: null,
            lname: null,
            id: null
        };

        //search for email in db:
        db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {

                try {
                    username = user.email;
                    password = user.password;
                    fname = user.first_name;
                    lname = user.last_name;
                    id = user.uid;

                    if (password === req.body.pass) {
                        resultObject = {
                            fname: user.first_name,
                            lname: user.last_name,
                            id: user.uid
                        };
                    }
                    res.json(resultObject); //return object - user match
                } catch (error) {
                    res.json(resultObject); //return object - user not matched
                }

            });
    });

    //DISPLAY:
    //use post to request information (with qualifiers)
    app.post("/api/display", function(req, res) {
        //IN:
        //{id: 2}

        //OUT: Entire results of left join for both tables. Middleware should pick and choose relevant data to display.


        //search for ID in db:
        db.User.findAll({
                where: {
                    uid: req.body.id //must exist
                },
                include: [db.Job]
            })
            .then(r => {
                res.json(r);
            });


    });

    //MAINTENENCE




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

    //use post to request information (with qualifiers)
    app.post("/api/users", function(req, res) {
        db.Post.create(req.body).then(function(dbPost) {
            res.json(dbPost);
        });
    });

    //UPDATE 


    //DELETE 




};