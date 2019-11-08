#!/usr/bin/env node

/*
 * Usage: $ node case.js "input string"
 * 
 * Flags: -u for uppercase, no flag for lowercase
 */
const input = process.argv[2];
const flag = process.argv[3];

if (input) {
    if (flag === '-u') {
        console.log(input.toUpperCase());
    }
    else {
        console.log(input.toLowerCase());
    }
}
