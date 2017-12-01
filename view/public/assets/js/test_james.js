 //require('jquery');

 $(document).ready(function() {
     //  var search = require("./search.js");

     //change function here to test different things
     //  $(document).on("submit", apiAuth); //authenication
     //$(document).on("submit", apiDisplay); 
     //$(document).on("submit", apiUser_Create); 
     //$(document).on("submit", apiUser_Read); 
     //$(document).on("submit", apiUser_Update); 
     //$(document).on("submit", apiUser_Delete); 
     //$(document).on("submit", apiJob_Create); 
     //$(document).on("submit", apiJob_Read); 
     //$(document).on("submit", apiJob_Update);
     //  $(document).on("submit", apiJob_Delete);
     $('button').on("click", mySearch('developer', '')); //triggers on page load and button click (?)

     function mySearch(search, location) {
         var sObj = {
             s: search,
             l: location
         };

         console.log('sent:');
         console.log(sObj);
         $.post("/api/search", sObj, function(data) {
             console.log('received back:');
             console.log(data);
             var myJSON = JSON.stringify(data);
             $('#r').text(myJSON);
         }, "json");

     }


     // ** USER **

     //tests auth
     function apiAuth() {
         var authVar = {
             email: 'bigonet1@mit.edu',
             pass: 'Q3OiMPsw5f'
         };

         event.preventDefault(); //crucial to see correct results!
         console.log('sent:');
         console.log(authVar);
         $.post("/api/auth", authVar, function(data) {
             console.log('received back:');
             console.log(data);
             var myJSON = JSON.stringify(data);
             $('#r').text(myJSON);
         }, "json");

     }

     //tests user/hr 'full results (job and user info)
     function apiDisplay() {
         var displayVar = {
             id: '2'
         };
         event.preventDefault(); //crucial to see correct results!
         console.log('sent:');
         console.log(displayVar);
         $.post("/api/display", displayVar, function(data) {
             console.log('received back:');
             console.log(data);
             var myJSON = JSON.stringify(data);
             $('#r').text(myJSON);
         }, "json");
     }

     //tests create user/hr
     function apiUser_Create() {
         event.preventDefault(); //crucial to see correct results!

         var uObj = { //required fields have *'s  below - all fields are strings
             first_name: null, //*
             last_name: null, //*
             email: null, //*
             password: null, //*
             if_company: null, //*
             comp_name: null,
             city: null,
             state: null,
             zip: null,
             resume: null,
             doc1: null,
             doc2: null,
             doc3: null
         };

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


         console.log('sent:');
         console.log(uObj);
         $.post("/api/user/create", uObj, function(data) {
             console.log('received back:');
             console.log(data);
             var myJSON = JSON.stringify(data);
             $('#r').text(myJSON);
         }, "json");
     }

     //tests individual user/hr info from user table
     function apiUser_Read() {
         event.preventDefault(); //crucial to see correct results!
         // var listItemData = $(this).parent("td").parent("tr").data("author");
         // var id = listItemData.id;

         //can use above or an object/var(?):
         var id = 2;
         console.log('sent:');
         console.log(id);
         $.ajax({
                 method: "GET",
                 url: "/api/user/" + id,
                 dataType: "json"
             })
             .done(function(data) {
                 console.log('received back:');
                 console.log(data);
                 var myJSON = JSON.stringify(data);
                 $('#r').text(myJSON);
             });
     }

     //update user/hr info (ID IS REQUIRED!)
     function apiUser_Update() {


         event.preventDefault(); //crucial to see correct results!
         var uObj = { //required fields have *'s  below - all fields are strings
             id: 16, //*
             first_name: 'John',
             last_name: 'Public',
             email: 'jq@public.com',
             password: 'jennyjenny',
             if_company: '0',
             comp_name: '',
             city: '',
             state: '',
             zip: '',
             resume: '',
             doc1: '',
             doc2: '',
             doc3: ''
         };

         console.log('sent:');
         console.log(uObj);
         $.ajax({
                 method: "PUT",
                 url: "/api/user/update",
                 data: uObj,
                 dataType: "json"
             })
             .done(function(data) {
                 console.log('received back:');
                 console.log(data);
                 var myJSON = JSON.stringify(data);
                 $('#r').text(myJSON);
             });
     }

     //tests individual user/hr info from user table
     function apiUser_Delete() {
         event.preventDefault(); //crucial to see correct results!
         // var listItemData = $(this).parent("td").parent("tr").data("author");
         // var id = listItemData.id;

         //can use above or an object/var(?):
         var id = 2;
         console.log('sent:');
         console.log(id);
         $.ajax({
                 method: "DELETE",
                 url: "/api/user/" + id,
                 dataType: "json"
             })
             .done(function(data) {
                 console.log('received back:');
                 console.log(data);
                 var myJSON = JSON.stringify(data);
                 $('#r').text(myJSON);
             });
     }


     // ** JOB **

     //tests create job
     function apiJob_Create() {
         event.preventDefault(); //crucial to see correct results!

         var jObj = { //TODO: populate correctly
             UserId: 2,
             job_title: 'one',
             job_desc: 'two',
             job_posted: 'three',
             if_remote: '4',
             job_type_id: '5',
             job_type_name: '6',
             if_ft: '7',
             comp_name: '8',
             comp_url: '9',
             comp_loc: '10',
             comp_logo: '11',
             apply_url: '12',
             job_url: '13',
             hr_feedback: '14',
             hr_if_hired: '15'
         };


         console.log('sent:');
         console.log(jObj);
         $.post("/api/job/create", jObj, function(data) {
             console.log('received back:');
             console.log(data);
             var myJSON = JSON.stringify(data);
             $('#r').text(myJSON);
         }, "json");
     }

     //tests individual job info from job table
     function apiJob_Read() {
         event.preventDefault(); //crucial to see correct results!
         // var listItemData = $(this).parent("td").parent("tr").data("author");
         // var id = listItemData.id;

         //can use above or an object/var(?):
         var id = 2;
         console.log('sent:');
         console.log(id);
         $.ajax({
                 method: "GET",
                 url: "/api/job/" + id,
                 dataType: "json"
             })
             .done(function(data) {
                 console.log('received back:');
                 console.log(data);
                 var myJSON = JSON.stringify(data);
                 $('#r').text(myJSON);
             });
     }

     //update job info (ID IS REQUIRED!)
     function apiJob_Update() {
         event.preventDefault(); //crucial to see correct results!
         var jObj = { //TODO: populate correctly
             id: 2,
             job_title: 'six',
             job_desc: 'two',
             job_posted: 'four',
             if_remote: '4',
             job_type_id: '5',
             job_type_name: '6',
             if_ft: '7',
             comp_name: '8',
             comp_url: '9',
             comp_loc: '10',
             comp_logo: '11',
             apply_url: '12',
             job_url: '13',
             hr_feedback: '14',
             hr_if_hired: '15'
         };

         console.log('sent:');
         console.log(jObj);
         $.ajax({
                 method: "PUT",
                 url: "/api/job/update",
                 data: jObj,
                 dataType: "json"
             })
             .done(function(data) {
                 console.log('received back:');
                 console.log(data);
                 var myJSON = JSON.stringify(data);
                 $('#r').text(myJSON);
             });
     }

     //tests individual job info from job table
     function apiJob_Delete() {
         event.preventDefault(); //crucial to see correct results!
         // var listItemData = $(this).parent("td").parent("tr").data("author");
         // var id = listItemData.id;

         //can use above or an object/var(?):
         var id = 2;
         console.log('sent:');
         console.log(id);
         $.ajax({
                 method: "DELETE",
                 url: "/api/job/" + id,
                 dataType: "json"
             })
             .done(function(data) {
                 console.log('received back:');
                 console.log(data);
                 var myJSON = JSON.stringify(data);
                 $('#r').text(myJSON);
             });
     }













 });