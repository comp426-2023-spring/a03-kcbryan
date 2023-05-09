#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js"

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

//prevent the usage of multiple arguments in terminal
if(args._.length>1) {
    console.error("Too many arguments! No more than one please :)");
    process.exit(1);
    process.exit(1);
}

//call rpsls without user-inputted shot
if(args._.length==0) {
    console.log(rpsls());
}

//try to call rpsls with the user-inputted shot
else{
    try {
        console.log(rpsls(args._[0]));
    } catch (error) {
        console.log("Argument out of range.");
        getHelp();
        getRules();
        process.exit(1);
    }
}


//output help statement when called by the terminal argument
function getHelp() {
    console.log("Usage: node-rps [SHOT]");
    console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n");
    console.log("\t-h, --help      display this help message and exit");
    console.log("\t-r, --rules     display the rules and exit\n");
    console.log("Examples:");
    console.log("\tnode-rpsls        Return JSON with single player RPSLS result.");
    console.log("\t\te.g. {'player':'rock'}");
    console.log("\tnode-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.");
    console.log("\t\te.g {'player':'rock','opponent':'Spock','result':'win'}")
}

//output rules when called by terminal argument
function getRules() {
    console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n");
    console.log("\t- Scissors CUTS Paper");
    console.log("\t- Paper COVERS Rock");
    console.log("\t- Rock SMOOSHES Lizard");
    console.log("\t- Lizard POISONS Spock");
    console.log("\t- Spock SMASHES Scissors");
    console.log("\t- Scissors DECAPITATES Lizard");
    console.log("\t- Lizard EATS Paper");
    console.log("\t- Paper DISPROVES Spock");
    console.log("\t- Spock VAPORIZES Rock");
    console.log("\t- Rock CRUSHES Scissors");
};

