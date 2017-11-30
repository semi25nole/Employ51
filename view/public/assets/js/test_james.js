 //require('jquery');

 $(document).ready(function() {

     //change function here to test different things
     // $(document).on("submit", apiAuth); //authenication
     //$(document).on("submit", apiDisplay); //change function here to test different things
     //$(document).on("submit", apiUser_Create); //change function here to test different things
     $(document).on("submit", apiUser_Read); //change function here to test different things



     var dataObj = {
         id: '20',
         name: 'john Smith'
     };





     function apiU(params) {
         $.post("/api/users", dataObj)
             .then(doSomething);
     }

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
         $.post("/api/maint/create", uObj, function(data) {
             console.log('received back:');
             console.log(data);
             var myJSON = JSON.stringify(data);
             $('#r').text(myJSON);
         }, "json");
     }

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
                 url: "/api/maint/" + id,
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