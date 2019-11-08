#!/usr/bin/env node

/*
 * Usage: $ node uuid.js
 */

const uuidv4 = require('uuid/v4');
const clipboard = require('clipboardy');

const flag = process.argv[2];
const uuid = uuidv4();

if (flag === '-h') {
    console.log('usage: uuid');
}
else {
    clipboard.writeSync(uuid);
    console.log(uuid);
}