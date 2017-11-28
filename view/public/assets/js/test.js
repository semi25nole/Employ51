$(document).ready(function() {


    $(document).on("submit", apiAuth);

    var dataObj = {
        id: '20',
        name: 'john Smith'
    };

    var authVar = {
        email: 'bigonet1@mit.ed',
        pass: 'Q3OiMPsw5f'
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
            console.log(data); // John
            // console.log(data.time); // 2pm
        }, "json");

    }
});