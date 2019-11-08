#!/usr/bin/env node

const scripts = require('./config/scripts.js');
const bashFile = require('os').homedir() + '/.bash_profile';

const insertLine = require('insert-line');

const description = [
    "# Helpful Scripts",
    "# -----------------------------------------------------------------------------------------"
];
const currentDirectory = __dirname;

for (command in scripts) {
    description.push("alias " + command + "='node " + currentDirectory + "/" + scripts[command] + "'");
}

description.push("# -----------------------------------------------------------------------------------------");

insertLine(bashFile).appendSync("\n");

description.map((line) => {
    insertLine(bashFile).appendSync(line);
});
