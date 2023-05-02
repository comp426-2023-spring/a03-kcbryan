#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js"

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
    console.log(rpsls());
}
else{
    console.log(rpsls(args._[0]));
}



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
    process.exit(0);
}

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
    process.exit(0);
};

