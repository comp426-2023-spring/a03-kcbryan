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
        playerChoice = inputShot;
    }
    const player = Player(playerChoice)
    if(inputShot==null) {
        return player;
    }
    const game = Game(inputShot, 3);
    

}

function rpsls(playerChoice) {
    let playerChoice;
    if(playerChoice==null) {
        playerChoice = generateShot(5);
    }
}