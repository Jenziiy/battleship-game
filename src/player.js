const GameBoard = require('./gameboard.js');

class Player {
  constructor(name = 'robot', ships = 10){
    this.name = name;
    this.ships = ships;
    this.gameboard = new GameBoard();
  }
}

module.exports = Player;