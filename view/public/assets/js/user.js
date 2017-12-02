$(document).ready(function() {
    var url = $(this).attr('data-url');
    var current_url = window.location.href;
    var uid = 0;


    var substring = 'id=';

    if (current_url.indexOf(substring) !== -1) {
        var array = current_url.split('id=');
        uid = parseInt(array[1]);
    } else {
        window.location.href = "/"; //redirect to home
    }


    //modals
    // $('#applications').on('click', function() {
    //     $('#applicationModal').modal('show');
    // });

    $('#resumes').on('click', function() {
        $('#resumeModal').modal('show');
    });

    $('#uploadMyResume').on('click', function() {
        $('#uploadResume').modal('show');
    });

    $('#savedJobs').on('click', function() {
        //modify modal
        showUserandJobs(uid);






        $('#savedJobModal').modal('show');
    });

    $('#deleteAccount').on('click', function() {
        $('#deleteModal').modal('show');

    });

    $('#deleteModal').on('click', function() {
        close();
    });

    function close() {
        $('#deleteModal').hide();
    };







    //custom functions
    //tests user/hr 'full results (job and user info)
    function showUserandJobs(idIn) {
        var displayVar = {
            id: idIn
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


    console.log(uid);
});