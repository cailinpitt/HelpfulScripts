#!/usr/bin/env node

/*
 * Usage: $ node weather.js zipcode
 */

const zipCode = process.argv[2];
const url = 'http://wttr.in/';

var exec = require('child_process').exec;

var command = 'curl -s ' + url + zipCode + ' -m 3 | head -n 7';

exec(command, (error, stdout, stderr) => {

    console.log(stdout);

    if(stderr !== null)
        console.log(stderr);

    if(error !== null)
        console.log(error);
});