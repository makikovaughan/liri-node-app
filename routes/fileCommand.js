
const fs = require('fs');

module.exports = function (cb) {
    fs.readFile('./random.txt', 'utf8', function (err, data) {

        if (err) {
            return console.log(err);
        }

        // Break the string down by comma separation and store the contents into the output array.
        const output = data.split(',');

        command = output[0];
        name = output[1];

        cb(command, name);

    });

}