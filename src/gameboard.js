import { Ship } from "./ship.js";

export class GameBoard {
  
  constructor(amount = 10){
    this.ships = this.setShips(amount);
  }

  setShips(amount){
    const shipArray = []

    for (let xSmall = 0; xSmall < 4; xSmall++) {
      shipArray.push(new Ship(1)); 
    }
    for (let small = 0; small < 3; small++) {
      shipArray.push(new Ship(2));
    }
    for (let medium = 0; medium < 2; medium++) {
      shipArray.push(new Ship(3));
    }
    for (let large = 0; large < 1; large++) {
      shipArray.push(new Ship(4));
    }
    return shipArray;
  }

  receiveAttack(coordinates){

  }
}

const gameboard = new GameBoard();
console.log(gameboard.setShips(10));