var request = require("request");

function mySearch(search, location) {
    // this.apiKey = 'eef2ebd00509e1f156de2fe3ea5065c8';
    // this.method = 'aj.jobs.search';
    // this.perpage = 15;
    // this.format = 'json';
    this.query = search || 'developer'; //default value
    this.place = location || 'remote';

    var URL = 'https://authenticjobs.com/api/?api_key=eef2ebd00509e1f156de2fe3ea5065c8&method=aj.jobs.search&perpage=15&format=json&query=' + this.query + '&location=' + this.place;

    // Then run a request to the OMDB API with the movie specified
    request(URL, function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            // console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
            return JSON.parse(body);
        }
    });


}




module.exports = mySearch;