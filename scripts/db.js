#!/usr/bin/env node

/*
 * Usage
 * convert base 10 decimal to binary:
 * $ node db.js 5 -b
 * 
 * convert binary to base 10 decimal:
 * $ node db.js 0101 -d
 */

const clipboard = require('clipboardy');

const input = process.argv[2];
const flag = process.argv[3];

if (input === '-h' || flag === '-h') {
    console.log('usage: db <input> [-b convert to binary] [-d convert to decimal]');
}
else {
    if (input) {
        if (flag === '-b') {
            // convert to binary

            const binary = (+input).toString(2);
            clipboard.writeSync(binary);
            console.log(binary);
        }
        else if (flag === '-d') {
            // convert to decimal

            const decimal = parseInt(input, 2).toString();
            clipboard.writeSync(decimal);
            console.log(decimal);
        }
    }
}