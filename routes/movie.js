const axios = require('axios');
const id = "f60283ae";

module.exports = function (name) {

    //Based on API requirement, changing the space to + for the title.
    const title = name.replace(" ", "+");

    //Movie URL
    const url = `http://www.omdbapi.com/?apikey=${id}&t=${title}`;

    //Calling the API to receive the movie information
    axios.get(url)
        .then(function (response) {
            if (response.status === 200) {

                const movie = response.data;

                //No results
                if (movie.Response === "False") {
                    console.log("No results. Please make sure that the title is correct");
                }
                else { //Display the results
                    console.log("***********************************************************");
                    console.log(`Movie Title: ${movie.Title}`);
                    console.log(`Year: ${movie.Year}`);
                    console.log(`IMDB Rating: ${movie.imdbRating}`);
                    if (movie.Ratings.length === 0 || !movie.Ratings[1]) {
                        console.log(`Rotten Tomatoes Rating: No ratings`);
                    }
                    else {
                        console.log(`Rotten Tomatoes Rating: ${movie.Ratings[1].Value}`);
                    }
                    console.log(`Country: ${movie.Country}`);
                    console.log(`Language: ${movie.Language}`);
                    console.log(`Plot of the movie: ${movie.Plot}`);
                    console.log(`Actors in the movie: ${movie.Actors}`);
                    console.log("***********************************************************");
                }

            }
        })
        .catch(function(error){
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if(error.request){
                console.log(error.request);
            }
            else {
                console.log(`Error ${error.message}`);
            }
        });
}


