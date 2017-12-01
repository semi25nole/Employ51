$(document).ready(function() { //jQuery load page start



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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DO NOT TOUCH!
    function mySearch(search, location) {
        // this.apiKey = 'eef2ebd00509e1f156de2fe3ea5065c8';
        // this.method = 'aj.jobs.search';
        // this.perpage = 15;
        // this.format = 'json';
        this.query = search || 'developer'; //default value
        this.place = location || 'remote';

        var queryURL = 'https://authenticjobs.com/api/?api_key=eef2ebd00509e1f156de2fe3ea5065c8&method=aj.jobs.search&perpage=15&format=json&query=' + this.query + '&location=' + this.place;

        // // Then run a request to the OMDB API with the movie specified
        // request(URL, function(error, response, body) {

        //     // If the request is successful (i.e. if the response status code is 200)
        //     if (!error && response.statusCode === 200) {

        //         // Parse the body of the site and recover just the imdbRating
        //         // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        //         // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);

        //     }
        // });

        $.ajax({
                method: "GET",
                url: queryURL
                    // dataType: "json"
            })
            .done(function(data) {
                console.log('received back:');
                console.log(data);
                var myJSON = JSON.stringify(data);
                $('#r').text(myJSON);
                return JSON.parse(data);
            });

    }


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DO NOT TOUCH!





}); //jQuery load page end