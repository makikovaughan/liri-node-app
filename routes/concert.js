const axios = require('axios');
const id = "fea2935fd76b784ff9177a0f21ba9766";

module.exports = function (name) {

    axios.get(`https://rest.bandsintown.com/artists/${name}/events?app_id=${id}`)
        .then(function (response) {
            if (response.status === 200) {

                const concert = response.data;

                concert.forEach(e => {

                    console.log("***********************************************************");
                    console.log(`Date: ${e.datetime}`);
                    console.log(`Venue: ${e.venue.name}`);
                    console.log(`Location: ${e.venue.city}, ${e.venue.region}, ${e.venue.country}`);

                });
                console.log("***********************************************************");

            }
        });
}