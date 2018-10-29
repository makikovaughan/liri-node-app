const axios = require('axios');
const id = "fea2935fd76b784ff9177a0f21ba9766";

module.exports = function (name) {

    //API call to check the concert for the artist
    axios.get(`https://rest.bandsintown.com/artists/${name}/events?app_id=${id}`)
        .then(function (response) {
            if (response.status === 200) {

                const concert = response.data;

                //No information found
                if (concert.length === 0) {
                    console.log("No result. Please make sure that the artist's name is correct.")
                } //If found
                else {

                    //Display the result
                    concert.forEach(e => {

                        console.log("***********************************************************");
                        console.log(`Date: ${e.datetime}`);
                        console.log(`Venue: ${e.venue.name}`);
                        console.log(`Location: ${e.venue.city}, ${e.venue.region}, ${e.venue.country}`);

                    });
                }
                console.log("***********************************************************");

            }
        }) //For error
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            }
            else if (error.request) {
                console.log(error.request);
            }
            else {
                console.log(`Error ${error.message}`);
            }
        });
}