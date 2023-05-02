#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"


const args = minimist(process.argv.slice(2));

if(args.h || args.help) {
    getHelp();
}

if(args.r || args.rules) {
    getRules();
}

if(args._.length>1) {
    console.error(args._[1] + " is out of range. ");
    process.exit(1);
}

if(args._.length==0) {
    console.log(rps());
}
else{
    console.log(rps(args._[0]));
}

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
    process.exit(0);
}

function getRules() {
    console.log("Rules for Rock Paper Scissors:\n");
    console.log("\t- Scissors CUTS Paper");
    console.log("\t- Paper COVERS Rock");
    console.log("\t- Rock CRUSHES Scissors")
    process.exit(0);
};

