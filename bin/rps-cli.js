#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"


const args = minimist(process.argv.slice(2));

//check for presence of help argument
if(args.h || args.help) {
    getHelp();
    process.exit(0);
}

//check for presence of rules argument
if(args.r || args.rules) {
    getRules();
    process.exit(0);
}

//gatekeep people who add too many arguments"
if(args._.length>1) {
    console.error("Too many arguments! No more than one please :)");
    process.exit(1);
}

//make function call for users who provide no shot
if(args._.length==0) {
    console.log(rps());
}

//try to make function call for people providing a shot arg
else{
    try {
        console.log(rps(args._[0]));
    } catch (error) {
        console.log("Argument out of range.");
        getHelp();
        getRules();
        process.exit(1);
    }
    
}

//prints out help message when help arg is called/included
function getHelp() {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play Rock Paper Scissors (RPS)\n");
    console.log("\t-h, --help      display this help message and exit");
    console.log("\t-r, --rules     display the rules and exit\n");
    console.log("Examples:");
    console.log("\tnode-rps        Return JSON with single player RPS result.");
    console.log("\t\te.g. {'player':'rock'}");
    console.log("\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.");
    console.log("\t\te.g {'player':'rock','opponent':'scissors','result':'win'}")
}

function getRules() {
    console.log("Rules for Rock Paper Scissors:\n");
    console.log("\t- Scissors CUTS Paper");
    console.log("\t- Paper COVERS Rock");
    console.log("\t- Rock CRUSHES Scissors")
};

