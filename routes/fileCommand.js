
const fs = require('fs');

module.exports = function (cb) {

    //Read the file
    fs.readFile('./random.txt', 'utf8', function (err, data) {

        if (err) {
            return console.log(err);
        }

        // Break the string down by comma separation and store the contents into the output array.
        const output = data.split(',');

        const command = output[0];
        const name = output[1];

        //Calling back the input infomrmation from the file
        cb(command, name);

    });

}