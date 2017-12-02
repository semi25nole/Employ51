$(document).ready(function() { //begin jQuery load page
    var url = $(this).attr('data-url');
    var current_url = window.location.href;
    var uid = 0;
    var jobObject;

    var substring = 'id=';

    if (current_url.indexOf(substring) !== -1) {
        var ary = current_url.split('id=');
        uid = parseInt(ary[1]);
    } else {
        window.location.href = "/"; //redirect to home
    }


    //modals
    // $('#applications').on('click', function() {
    //     $('#applicationModal').modal('show');
    // });

    $('#del_yes').on('click', function() {
        window.location.href = "/"; //redirect to home
    });

    $('#resumeOptions').on('click', function() {
        addUserDocstoModal();
        $('#resumeModal').modal('show');
    });

    // $('#uploadMyResume').on('click', function() {
    //     $('#uploadResume').modal('show');
    // });

    $('#savedJobs').on('click', function() {
        addUserJobstoModal(uid); //fill modal with job results
        $('#savedJobModal').modal('show'); //show
    });

    //delete chosen job(s) on modal

    var chosenModalJob = $('select[name=selector]').val(); //$('#mySavedJobs_select').val();
    console.log(chosenModalJob);

    function delUserJobstoModal(idIn) {
        var displayVar = {
            id: idIn
        };
        event.preventDefault(); //crucial to see correct results!

        $.post("/api/display", displayVar, function(data) {

            var array = data[0].Jobs;

            for (var index = 0; index < array.length; index++) {
                var title = array[index].job_title;
                var comp = array[index].comp_name;
                var jID = array[index].id;

                $('#mySavedJobs_select').append($('<option>', {
                    value: jID,
                    text: title + ' at ' + comp

                }));
            }

        });
    }

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
    function addUserJobstoModal(idIn) {
        var displayVar = {
            id: idIn
        };
        event.preventDefault(); //crucial to see correct results!

        $.post("/api/display", displayVar, function(data) {
            console.log(data);
            var array = data[0].Jobs;

            for (var index = 0; index < array.length; index++) {
                var title = array[index].job_title;
                var comp = array[index].comp_name;
                var jID = array[index].id;

                $('#mySavedJobs_select').append($('<option>', {
                    value: jID,
                    text: title + ' at ' + comp
                }));
            }

        });
    }

    function deleteAccnt(idIn) {
        var displayVar = {
            id: idIn
        };
        event.preventDefault(); //crucial to see correct results!

        $.post("/api/display", displayVar, function(data) {
            console.log(data);
            var array = data[0].Jobs;

            for (var index = 0; index < array.length; index++) {
                var title = array[index].job_title;
                var comp = array[index].comp_name;
                var jID = array[index].id;

                $('#mySavedJobs_select').append($('<option>', {
                    value: jID,
                    text: title + ' at ' + comp
                }));
            }

        });


    }

    //tests individual user/hr info from user table
    function apiUser_Delete(idIn) {
        event.preventDefault(); //crucial to see correct results!
        // var listItemData = $(this).parent("td").parent("tr").data("author");
        // var id = listItemData.id;

        //can use above or an object/var(?):
        // var id = 2;
        console.log('sent:');
        console.log(id);
        $.ajax({
                method: "DELETE",
                url: "/api/user/" + idIn,
                dataType: "json"
            })
            .done(function(data) {
                console.log('received back:');
                console.log(data);
                var myJSON = JSON.stringify(data);
                $('#r').text(myJSON);
            });
    }

    function addUserDocstoModal(idIn) {

        $('#myResume_select').append($('<option>', {
            value: 0,
            text: 'Document 1'
        }));

        $('#myResume_select').append($('<option>', {
            value: 1,
            text: 'Document 2'
        }));

        $('#myResume_select').append($('<option>', {
            value: 2,
            text: 'Document 3'
        }));

        // var displayVar = {
        //     id: idIn
        // };
        // event.preventDefault(); //crucial to see correct results!

        // $.post("/api/display", displayVar, function(data) { 








        // });
    }



}); //end jQuery load page