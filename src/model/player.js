const Board = require('./board.js');

class Player {
  constructor(name = 'robot', ships = 10){
    this.name = name;
    this.ships = ships;
    this.board = new Board();
  }
}

module.exports = Player;