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
    $('#applications').on('click', function() {
        $('#applicationModal').modal('show');
    });

    $('#resumes').on('click', function() {
        $('#resumeModal').modal('show');
    });

    $('#uploadMyResume').on('click', function() {
        $('#uploadResume').modal('show');
    });

    $('#savedJobs').on('click', function() {
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


    console.log(uid);
});