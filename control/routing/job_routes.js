//Grab the models folder
var db = require("../../models");

//Routes
module.exports = function(app) {

    //create job
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
    // Creates job in db and returns matching object:
    /*
    {"id":21,"first_name":"John","last_name":"Public","email":"jq@public.com","password":"8675309","if_company":"0","comp_name":"","city":"","state":"","zip":"","resume":"","doc1":"","doc2":"","doc3":"","updatedAt":"2017-11-30T00:01:17.997Z","createdAt":"2017-11-30T00:01:17.997Z"}
    */

    app.post("/api/job/create", function(req, res) {
        db.Job.create(req.body).then(function(data) {
            res.json(data);
        });
    });

    //read job info
    //IN: number

    //OUT:
    /*
    object will all the job info from the job table (look at /models/users.js for specific data 
    OR the test file example return object (too big to put here).
    )
    */

    app.get("/api/job/:id", function(req, res) {
        db.Job.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(data) {
            res.json(data);
        });
    });


    //update job info
    // PUT route for updating posts

    //IN below object (has ID field required)

    //OUT: returns how many records updated
    app.put("/api/job/update", function(req, res) {
        db.Job.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function(data) {
            res.json(data);
        });
    });

    //delete job
    //IN: job id in form of a number
    //OUT: returns how many entries on jobs table deleted

    app.delete("/api/job/:id", function(req, res) {
        // Delete the job with the id available to us in req.params.id
        db.Job.destroy({

            where: {
                id: req.params.id //must exist
            }
        })

        .then(function(data) {
            res.json(data);
        });
    });




};