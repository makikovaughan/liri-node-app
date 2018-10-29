require('dotenv').config();

//Get input data from the command line
let command = process.argv[2];
let name = process.argv.slice(3).join(" ");

name = name.toUpperCase();

const doCommand = function (command, name) {
    //Music is searched by Spotify
    if (command === "spotify-this-song") {

        //If the name is blank, the music will be What's My Age Again? 
        if (!name) {
            name = "What’s My Age Again? (Instrumental Track With Background Vocals)[Karaoke in the style of Blink 182]";
        }

        //Call the function in spotify.js to get the information
        require('./routes/spotify.js')(name);

    } //Check the concert information by the artist
    else if (command === "concert-this") {

        if (!name) { //If the information is empty, notify the user to type.
            console.log("Please type the artist name");
        }
        else {
            //Call the function in concert.js to get the information.
            require('./routes/concert.js')(name);
        }
    }
    else if (command === "movie-this") {
        if (!name) { //If the information is empty, notify the user to type.
            name = "Mr. Nobody";
        }

        //Call the function in concert.js to get the information.
        require('./routes/movie.js')(name);

    }
    else {
        console.log("Please check your command");
    }
}


if (!command) {
    console.log("Please type the command");
}
else {
    command = command.trim().toLowerCase();

    if (command === "do-what-it-says") {

        require('./routes/fileCommand.js')(function (command, name) {

            doCommand(command, name);

        });

    }
    else {
        doCommand(command, name);
    }
}

