// require('jquery');

$(document).ready(function() {

    //change function here to test different things
    // $(document).on("submit", apiAuth); //authenication
    $(document).on("submit", apiDisplay); //change function here to test different things

    var dataObj = {
        id: '20',
        name: 'john Smith'
    };

    var authVar = {
        email: 'bigonet1@mit.edu',
        pass: 'Q3OiMPsw5f'
    };

    var displayVar = {
        id: '2'
    };

    function apiU(params) {
        $.post("/api/users", dataObj)
            .then(doSomething);
    }

    function apiAuth() {
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










});