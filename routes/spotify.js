// const Spotify = require('spotify-web-api-node');
const Spotify = require('spotify-web-api-node');
const keys = require('../keys.js');

const spotify = new Spotify(keys.spotify);

module.exports = function (name) {
    // Get an access token and 'save' it using a setter
    spotify.clientCredentialsGrant()
        .then(
            function (data) {
                // console.log('The access token expires in ' + data.body['expires_in']);
                // console.log('The access token is ' + data.body['access_token']);

                // Save the access token so that it's used in future calls
                spotify.setAccessToken(data.body['access_token']);

                spotify.searchTracks(`track:${name}`)
                    .then(function (data) {

                        const music = data.body.tracks.items;

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