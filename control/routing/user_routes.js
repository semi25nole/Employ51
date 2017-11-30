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
    {"uid":2,"first_name":"Bucky","last_name":"Igonet","email":"bigonet1@mit.edu","password":"Q3OiMPsw5f","if_company":1,"comp_name":"Wikivu","street":"8 Porter Crossing","city":"Glendale","state":"AZ","zip":"85305","resume":"http://desdev.cn/platea/dictumst/etiam/faucibus/cursus/urna.jpg?eu=pharetra&orci=magna&mauris=vestibulum&lacinia=aliquet&sapien=ultrices&quis=erat&libero=tortor&nullam=sollicitudin&sit=mi&amet=sit&turpis=amet&elementum=lobortis&ligula=sapien&vehicula=sapien&consequat=non&morbi=mi&a=integer&ipsum=ac&integer=neque&a=duis&nibh=bibendum&in=morbi&quis=non&justo=quam&maecenas=nec&rhoncus=dui&aliquam=luctus&lacus=rutrum&morbi=nulla&quis=tellus&tortor=in&id=sagittis&nulla=dui&ultrices=vel&aliquet=nisl&maecenas=duis","doc1":"https://goo.ne.jp/lectus/in/quam.xml?vulputate=tincidunt&justo=eget&in=tempus&blandit=vel&ultrices=pede&enim=morbi&lorem=porttitor&ipsum=lorem&dolor=id&sit=ligula&amet=suspendisse&consectetuer=ornare&adipiscing=consequat&elit=lectus&proin=in&interdum=est&mauris=risus&non=auctor&ligula=sed&pellentesque=tristique&ultrices=in&phasellus=tempus&id=sit&sapien=amet&in=sem&sapien=fusce&iaculis=consequat&congue=nulla&vivamus=nisl&metus=nunc&arcu=nisl&adipiscing=duis&molestie=bibendum&hendrerit=felis&at=sed&vulputate=interdum&vitae=venenatis&nisl=turpis&aenean=enim","doc2":"https://thetimes.co.uk/dolor/sit.json?sed=rutrum&lacus=neque&morbi=aenean&sem=auctor&mauris=gravida&laoreet=sem&ut=praesent&rhoncus=id&aliquet=massa&pulvinar=id&sed=nisl","doc3":"https://alibaba.com/purus/sit/amet.xml?adipiscing=viverra&molestie=diam&hendrerit=vitae&at=quam&vulputate=suspendisse&vitae=potenti&nisl=nullam&aenean=porttitor&lectus=lacus&pellentesque=at&eget=turpis&nunc=donec&donec=posuere&quis=metus&orci=vitae&eget=ipsum&orci=aliquam&vehicula=non&condimentum=mauris&curabitur=morbi&in=non&libero=lectus&ut=aliquam&massa=sit&volutpat=amet&convallis=diam&morbi=in&odio=magna&odio=bibendum&elementum=imperdiet&eu=nullam&interdum=orci&eu=pede&tincidunt=venenatis&in=non&leo=sodales&maecenas=sed&pulvinar=tincidunt&lobortis=eu&est=felis&phasellus=fusce&sit=posuere&amet=felis&erat=sed&nulla=lacus&tempus=morbi&vivamus=sem&in=mauris&felis=laoreet&eu=ut&sapien=rhoncus&cursus=aliquet&vestibulum=pulvinar&proin=sed&eu=nisl&mi=nunc&nulla=rhoncus&ac=dui&enim=vel&in=sem&tempor=sed&turpis=sagittis&nec=nam&euismod=congue&scelerisque=risus&quam=semper&turpis=porta&adipiscing=volutpat&lorem=quam&vitae=pede&mattis=lobortis&nibh=ligula&ligula=sit&nec=amet&sem=eleifend&duis=pede&aliquam=libero&convallis=quis&nunc=orci&proin=nullam&at=molestie&turpis=nibh&a=in&pede=lectus&posuere=pellentesque&nonummy=at","createdAt":"2016-10-08T07:40:34.000Z","updatedAt":"2017-08-04T15:40:13.000Z"}
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