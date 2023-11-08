const ship = require('./ship.js');

class GameBoard {
  
  constructor(){
    this.ships = this.setShips();
    this.hitSet = new Set();
  }

  setShips(){
    const shipArray = []

    for (let large = 0; large < 1; large++) {
      shipArray.push(new ship(4));
    }
    for (let medium = 0; medium < 2; medium++) {
      shipArray.push(new ship(3));
    }
    for (let small = 0; small < 3; small++) {
      shipArray.push(new ship(2));
    }
    for (let xSmall = 0; xSmall < 4; xSmall++) {
      shipArray.push(new ship(1)); 
    }
    return shipArray;
  }

  receiveAttack(coords){
    const shipGotHit = this.findCoordsInFleet(this.ships, coords);
    if(shipGotHit){
      shipGotHit.hit();
      this.hitSet.add(coords);
      shipGotHit.isSunk();
      return true;
    } else {
      this.hitSet.add(coords);
      return false;
    }
  }
  findCoordsInFleet(arr, value){
    return arr.find(o => o.coords.includes(value));
  }
}
module.exports = GameBoard
const gameboard = new GameBoard();
console.log(gameboard.setShips());