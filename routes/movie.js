const axios = require('axios');
const id = "f60283ae";

module.exports = function (name) {

    const title = name.replace(" ", "+");

    const url = `http://www.omdbapi.com/?apikey=${id}&t=${title}`;

    axios.get(url)
        .then(function (response) {
            if (response.status === 200) {

                const movie = response.data;

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
        });
}


