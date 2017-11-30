$(document).ready(function() {

    //change function here to test different things
    //$(document).on("submit", apiAuth); //authenication
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

    function apiAuth(params) {

        console.log('out:');
        console.log(authVar);
        $.post("/api/auth", authVar, function(data) {
            console.log('in:');
            console.log(data); // 

        }, "json");

    }

    function apiDisplay(params) {
        $.post("/api/display", displayVar, function(data) {
            console.log('in:');
            console.log(data); // 
            alert(data);

        }, "json");
    }
});