//This is going to be the main file and also where you will put your exported RPS and RPSLS function(s).

//provide base values for all player and opponent values
  const enumPlayerChoice = Object.freeze({
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
    lizard: 'lizard',
    spock: 'spock',
  });

  //generates a string value for player based on game type (max will never be >2 for rps)
  function generateShot(max) {
    let shotNum = Math.floor(Math.random() * max);
    if(shotNum==0) {
        return enumPlayerChoice.rock;
    }
    else if(shotNum==1) {
        return enumPlayerChoice.paper;
    }
    else if(shotNum==2) {
        return enumPlayerChoice.scissors;
    }
    else if(shotNum==3) {
        return enumPlayerChoice.lizard;
    }
    else if(shotNum==4) {
        return enumPlayerChoice.spock;
    }
  }

  //create class to store the player shot
  class Player {
    constructor(shot) {
       this.player = shot;
    }
  }

  //create class to store player shot, opponent shot, and result
  class Game {
    constructor(shot, max) {
        this.player = shot;
        this.opponent = generateShot(max);
        this.result;
    }
  }

//create exportable function for rps that accepts a shot or no shot and returns game outcome or shot outcome
export function rps(inputShot) {
    let playerChoice;
    if(inputShot==null) {
        playerChoice = generateShot(3);
    }
    else  {
        playerChoice = inputShot.toLowerCase();
        if(!(playerChoice==enumPlayerChoice.paper||playerChoice==enumPlayerChoice.rock||playerChoice==enumPlayerChoice.scissors)) {
            return error(playerChoice + " is out of range.");
        }
    }
    const player = new Player(playerChoice)
    if(inputShot==null) {
        return JSON.stringify(player);
    }
    const game = new Game(playerChoice, 3);
    if(game.player==game.opponent) {
        game.result="tie";
    }
    else if(game.player=="rock" && game.opponent=="scissors") {
        game.result="win";
    }
    else if (game.player=="paper" && game.opponent=="rock") {
        game.result="win";
    }
    else if (game.player=="scissors" && game.opponent=="paper") {
        game.result="win";
    }
    else {
        game.result="lose";
    }
    return JSON.stringify(game);

}

//create exportable function for rpsls that accepts a shot or no shot and returns game outcome or shot outcome
export function rpsls(inputShot) {
    let playerChoice;
    if(inputShot==null) {
        playerChoice = generateShot(5);
    }
    else  {
        playerChoice = inputShot.toLowerCase();
        if(!(playerChoice==enumPlayerChoice.paper||playerChoice==enumPlayerChoice.rock||playerChoice==enumPlayerChoice.scissors||playerChoice==enumPlayerChoice.lizard||playerChoice==enumPlayerChoice.spock)) {
            return error(playerChoice + " is out of range.");
        }
    }
    const player = new Player(playerChoice)
    if(inputShot==null) {
        return JSON.stringify(player);
    }
    const game = new Game(playerChoice, 5);
    if(game.player==game.opponent) {
        game.result="tie";
    }
    else if(game.player=="rock" && game.opponent=="scissors") {
        game.result="win";
    }
    else if(game.player=="rock" && game.opponent=="lizard") {
        game.result="win";
    }
    else if (game.player=="paper" && game.opponent=="rock") {
        game.result="win";
    }
    else if (game.player=="paper" && game.opponent=="spock") {
        game.result="win";
    }
    else if (game.player=="scissors" && game.opponent=="paper") {
        game.result="win";
    }
    else if (game.player=="scissors" && game.opponent=="lizard") {
        game.result="win";
    }
    else if (game.player=="lizard" && game.opponent=="spock") {
        game.result="win";
    }
    else if (game.player=="lizard" && game.opponent=="paper") {
        game.result="win";
    }
    else if (game.player=="spock" && game.opponent=="rock") {
        game.result="win";
    }
    else if (game.player=="spock" && game.opponent=="scissors") {
        game.result="win";
    }
    else {
        game.result="lose";
    }
    return JSON.stringify(game);
}