// const Spotify = require('spotify-web-api-node');
const Spotify = require('spotify-web-api-node');
const keys = require('../keys.js');

const spotify = new Spotify(keys.spotify);

module.exports = function (name) {
    // Get an access token and 'save' it using a setter
    spotify.clientCredentialsGrant()
        .then(
            function (data) {

                // Save the access token so that it's used in future calls
                spotify.setAccessToken(data.body['access_token']);

                //Checking the song
                spotify.searchTracks(`track:${name}`)
                    .then(function (data) {

                        const music = data.body.tracks.items;

                        //No result
                        if (music.length === 0) {
                            console.log("No results. Please make sure that the title of song is correct.")
                        }
                        else { //If found, display the results
                            music.forEach(e => {

                                if (e.name.toUpperCase() === name.toUpperCase()) {
                                    console.log("***********************************************************");
                                    console.log(`Artist: ${e.album.artists[0].name}`);
                                    console.log(`Song: ${e.name}`);
                                    console.log(`Album Name: ${e.album.name}`);
                                    if (e.preview_url === null) {
                                        console.log(`Preview URL: Not Available`);
                                    }
                                    else {
                                        console.log(`Preview URL: ${e.preview_url}`);
                                    }
                                }
                            });
                            console.log("***********************************************************");
                        }
                    },
                        function (err) {
                            console.error(err);
                        }
                    );
            },
            function (err) {
                console.log('Something went wrong when retrieving an access token', err.message);
            }
        );
}