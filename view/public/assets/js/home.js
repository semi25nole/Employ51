$(document).ready(function() {
    // Getting reference to the job and location inputs //
    var jobInput = $("#job");
    var locationInput = $("#location");
    var jobContainer = $("#cardDiv");

    // Event listener to create objects //
    $(document).on("#search", "#cardDiv", handleJobSubmit);
    // $(document).on("click", "#apply", handleApply);

    // Getting job results //
    getJobs();

    // Function to handle what happens when submit
    function handleJobSubmit(event) {
        event.preventDefault();
        // Don't do anything if the job field or location hasn't been filled out
        if (!jobInput.val().trim().trim()) {
            return;
        } else if (!locationInput.val().trim().trim()) {
            return;
        }
    }

    // Function for creating a new list row for jobs
    function createJobRow(jobData) {
        var newTr = $("<tr>");
        newTr.data("job", jobData);
        newTr.append("<td>" + jobData.name + "</td>");
        newTr.append("<td> " + jobData.Posts.length + "</td>");
        return newTr;
    }

    // Function for retrieving jobs and getting them ready to be rendered to the page
    function getJobs() {
        $.get("/api/jobs", function(data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createJobRow(data[i]));
            }
            renderJobList(rowsToAdd);
            jobInput.val("");
        });
    }

    // A function for rendering the list of jobs to the page
    function renderJobList(rows) {
        jobList.children().not(":last").remove();
        if (rows.length) {
            console.log(rows);
            jobList.prepend(rows);
        } else {
            renderEmpty();
        }
    }

    // Function for handling what to render when there are no jobs
    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert alert-danger");
        alertDiv.text("Sorry, no jobs found.");
        jobContainer.append(alertDiv);
    }

    // Function for handling what happens when the delete button is pressed
    // function handleApply() {
    //     var listItemData = $(this).parent("td").parent("tr").data("job");
    //     var id = listItemData.id;
    //     $.ajax({
    //             method: "GET",
    //             url: "/api/jobs/" + id
    //         })
    //         .done(getJobs);
    // }
});