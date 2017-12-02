//Grab the models folder
var db = require("../../models");
var cors = require('cors');
var request = require("request");

//Routes
module.exports = function(app) {

    //SEARCH:

    app.post("/api/search", function(req, res) {

        var search = req.body.s || 'developer'; //default value
        var loc = req.body.l || 'remote';

        var queryURL = 'https://authenticjobs.com/api/?api_key=eef2ebd00509e1f156de2fe3ea5065c8&method=aj.jobs.search&perpage=15&format=json&query=' + search + '&location=' + loc;

        request(queryURL, function(error, response, body) {
            // If the request is successful (i.e. if the response status code is 200)
            if (!error && response.statusCode === 200) {
                res.json(JSON.parse(body));
            } else {
                res.json(JSON.parse(error));
            }
        });

    });




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
                    id = user.id;

                    if (password === req.body.pass) {
                        resultObject = {
                            fname: user.first_name,
                            lname: user.last_name,
                            id: user.id
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
                    id: req.body.id //must exist
                },
                include: [db.Job]
            })
            .then(function(r) {
                // console.log(r);
                res.json(r);
            });


    });


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
    {"id":21,"first_name":"John","last_name":"Public","email":"jq@public.com","password":"8675309","if_company":"0","comp_name":"","city":"","state":"","zip":"","resume":"","doc1":"","doc2":"","doc3":"","updatedAt":"2017-11-30T00:01:17.997Z","createdAt":"2017-11-30T00:01:17.997Z"}
    */

    app.post("/api/user/create", function(req, res) {
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

    app.get("/api/user/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data);
        });
    });


    //update user info
    // PUT route for updating posts

    //IN below object (has ID field required)

    //OUT: returns how many records updated
    app.put("/api/user/update", function(req, res) {
        db.User.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(data) {
            res.json(data);
        });
    });

    //delete user
    //IN: user id in form of a number
    //OUT: returns how many entries on jobs table deleted - assume 1 user on users table

    app.delete("/api/user/:id", function(req, res) {
        // Delete the user with the id available to us in req.params.id
        db.Job.destroy({

            where: {
                UserId: req.params.id //must exist
            }
        })

        .then(function(data) {
            db.User.destroy({

                where: {
                    id: req.params.id //must exist
                }
            })
            res.json(data);
        });
    });











};