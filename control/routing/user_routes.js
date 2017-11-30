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

        //OUT: Array of entire results of left join for both tables. Middleware should pick and choose relevant data to display.

        //search for ID in db:
        db.User.findAll({
                where: {
                    uid: req.body.id //must exist
                },
                include: [db.Job]
            })
            .then(function(r) {
                // console.log(r);
                res.json(r);
            });


    });

    //MAINTENENCE:
    //create user
    // POST route for saving a new post

    //IN:
    //example object:
    /*
    uObj = { //required fields have *'s  below - all fields are strings
             first_name: 'John', //*
             last_name: 'Public', //*
             email: 'jq@public.com', //*
             password: '8675309', //*
             if_company: '0', //*
             comp_name: '',
             city: '',
             state: '',
             zip: '',
             resume: '',
             doc1: '',
             doc2: '',
             doc3: ''
         };
    */

    //OUT:
    // Creates user in db and returns matching object:
    /*
    {"uid":21,"first_name":"John","last_name":"Public","email":"jq@public.com","password":"8675309","if_company":"0","comp_name":"","city":"","state":"","zip":"","resume":"","doc1":"","doc2":"","doc3":"","updatedAt":"2017-11-30T00:01:17.997Z","createdAt":"2017-11-30T00:01:17.997Z"}
    */

    app.post("/api/maint/create", function(req, res) {
        db.User.create(req.body).then(function(data) {
            res.json(data);
        });
    });

    //read user info
    //IN: number

    //OUT:
    /*
    object will all the user info from the user table (look at /models/users.js for specific data 
    OR the test file example return object (too big to put here).
    )
    */

    app.get("/api/maint/:id", function(req, res) {
        db.User.findOne({
            where: {
                uid: req.params.id
            }
        }).then(function(data) {
            res.json(data);
        });
    });



    //update user info
    //delete user


    //** anything below this line - disregard **

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