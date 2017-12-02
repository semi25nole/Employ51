var array;
    
            $('#search').on('click', function() {
                mySearch();
              
                                      
        function mySearch(search, location) {
            var sObj = {
                s: search,
                l: location
            };
          
            $.post("/api/search", sObj, function(data) {
               
                var myJSON = JSON.stringify(data);
    
               
                var array = data.listings.listing;
                console.log(array);
    
                for (var index = 0; index < array.length; index++) {
    
                    var job_title = array[index].title; //VARCHAR(255) NOT NULL, // listings.listing[0].title (string)
                    var job_desc = array[index].description; //LONGTEXT DEFAULT NULL, // listings.listing[0].description (string - HTML)
                    var job_posted = array[index].post_date; //VARCHAR(255) DEFAULT NULL, // listings.listing[0].post_date (string - Date/Time)
                    var if_remote = array[index].telecommuting; //INT DEFAULT 0, // listings.listing[0].telecommuting (int - boolean)
                    var job_type_id = array[index].category.id; //VARCHAR(10), // listings.listing[0].category.id (int)
                    var job_type_name = array[index].category.name; //VARCHAR(255), // listings.listing[0].category.name (string)
                    var if_ft = array[index].type.id; //INT DEFAULT 1, // listings.listing[0].type.id (boolean int)
                    var comp_name = array[index].company.name; //VARCHAR(255), // listings.listing[0].comp.name (string)
                    var comp_url = array[index].company.url; //VARCHAR(255), // listings.listing[0].comp.url (string - HTML)
                    var comp_loc = array[index].company.location.name; //VARCHAR(255), // listings.listing[0].comp.location.name
                    var comp_logo = array[index].company.logo; //VARCHAR(255), // listings.listing[0].company.logo (string - HTML)
                    var apply_url = array[index].apply_url; //VARCHAR(255), // listings.listing[0].apply_url (string - HTML)
                    var job_url = array[index].url; //VARCHAR(255), // listings.listing[0].url (string - HTML)

    
                    $('#comp').text('Company: ' + array[0].company.name);
                    $('#pos2').text('Title: ' + array[0].title);
                    $('#pos').text('Type: ' + array[0].type.name);

                      
                }
    
            }, "json");
    
        }

    });
        
    var array;
    
            $('#jobDescriptionApply').on('click', function() {
                mySearch();
              
                                      
        function mySearch(search, location) {
            var sObj = {
                s: search,
                l: location
            };
          
            $.post("/api/search", sObj, function(data) {
               
                var myJSON = JSON.stringify(data);
    
               
                var array = data.listings.listing;
                console.log(array);
    
                for (var index = 0; index < array.length; index++) {
    
                    var job_title = array[index].title; //VARCHAR(255) NOT NULL, // listings.listing[0].title (string)
                    var job_desc = array[index].description; //LONGTEXT DEFAULT NULL, // listings.listing[0].description (string - HTML)
                    var job_posted = array[index].post_date; //VARCHAR(255) DEFAULT NULL, // listings.listing[0].post_date (string - Date/Time)
                    var if_remote = array[index].telecommuting; //INT DEFAULT 0, // listings.listing[0].telecommuting (int - boolean)
                    var job_type_id = array[index].category.id; //VARCHAR(10), // listings.listing[0].category.id (int)
                    var job_type_name = array[index].category.name; //VARCHAR(255), // listings.listing[0].category.name (string)
                    var if_ft = array[index].type.id; //INT DEFAULT 1, // listings.listing[0].type.id (boolean int)
                    var comp_name = array[index].company.name; //VARCHAR(255), // listings.listing[0].comp.name (string)
                    var comp_url = array[index].company.url; //VARCHAR(255), // listings.listing[0].comp.url (string - HTML)
                    var comp_loc = array[index].company.location.name; //VARCHAR(255), // listings.listing[0].comp.location.name
                    var comp_logo = array[index].company.logo; //VARCHAR(255), // listings.listing[0].company.logo (string - HTML)
                    var apply_url = array[index].apply_url; //VARCHAR(255), // listings.listing[0].apply_url (string - HTML)
                    var job_url = array[index].url; //VARCHAR(255), // listings.listing[0].url (string - HTML)

                   $('#desc').html('<a href=' + array[0].url + '>' + 'Click here for more Info' + '</a>');
                   $('#loc').text(array[0].company.location.name);
    
                }
    
            }, "json");
    
        }

    });
