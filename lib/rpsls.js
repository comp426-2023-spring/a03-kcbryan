//This is going to be the main file and also where you will put your exported RPS and RPSLS function(s).

  const enumPlayerChoice = Object.freeze({
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
    lizard: 'lizard',
    spock: 'spock',
  });

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

  class Player {
    constructor(shot) {
       this.player = shot;
    }
  }
  class Game {
    constructor(shot, max) {
        this.player = shot;
        this.opponent = generateShot(max);
        this.result;
    }
  }

function rps(inputShot) {
    let playerChoice;
    if(inputShot==null) {
        playerChoice = generateShot(3);
    }
    else  {
        playerChoice = inputShot.toLowerCase();
        if(!(playerChoice==enumPlayerChoice.paper||playerChoice==enumPlayerChoice.rock||playerChoice==enumPlayerChoice.scissors)) {
            console.error(playerChoice + " is out of range.");
            exit(1);
        }
    }
    const player = Player(playerChoice)
    if(inputShot==null) {
        return player;
    }
    const game = Game(inputShot, 3);
    if(game.player==game.opponent) {
        game.result="tie";
    }
    else if(game.player=="rock" && game.opponent=="scissors") {
        game.result=="win";
    }
    else if (game.player=="paper" && game.opponent=="rock") {
        game.result=="win";
    }
    else if (game.player=="scissors" && game.opponent=="paper") {
        game.result=="win";
    }
    else {
        game.result=="lose";
    }
    return JSON.stringify(game);

}

function rpsls(playerChoice) {
    let playerChoice;
    if(playerChoice==null) {
        playerChoice = generateShot(5);
    }
    else  {
        playerChoice = inputShot.toLowerCase();
        if(!(playerChoice==enumPlayerChoice.paper||playerChoice==enumPlayerChoice.rock||playerChoice==enumPlayerChoice.scissors||playerChoice==enumPlayerChoice.lizard||playerChoice==enumPlayerChoice.spock)) {
            console.error(playerChoice + " is out of range.");
            exit(1);
        }
    }
    const player = Player(playerChoice)
    if(inputShot==null) {
        return player;
    }
    const game = Game(inputShot, 3);
    if(game.player==game.opponent) {
        game.result="tie";
    }
    else if(game.player=="rock" && game.opponent=="scissors") {
        game.result=="win";
    }
    else if(game.player=="rock" && game.opponent=="lizard") {
        game.result=="win";
    }
    else if (game.player=="paper" && game.opponent=="rock") {
        game.result=="win";
    }
    else if (game.player=="paper" && game.opponent=="spock") {
        game.result=="win";
    }
    else if (game.player=="scissors" && game.opponent=="paper") {
        game.result=="win";
    }
    else if (game.player=="scissors" && game.opponent=="lizard") {
        game.result=="win";
    }
    else if (game.player=="lizard" && game.opponent=="spock") {
        game.result=="win";
    }
    else if (game.player=="lizard" && game.opponent=="paper") {
        game.result=="win";
    }
    else if (game.player=="spock" && game.opponent=="rock") {
        game.result=="win";
    }
    else if (game.player=="spock" && game.opponent=="scissors") {
        game.result=="win";
    }
    else {
        game.result=="lose";
    }
    return JSON.stringify(game);
}