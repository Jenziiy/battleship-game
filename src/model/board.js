const ship = require('./ship.js');
const graph = new Map();
class Board {
  
  constructor(){
    this.ships = this.setShips();
    this.hitSet = new Set();
  }

  setGraph(){
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.graph.set(JSON.stringify([i,j]),[]);
      }
    }
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

  placeShips(){
    let input = 0;
    let x = 0;
    let y = 0;
    this.ships.forEach(ship => { 
       for (let i = input; i < ship.length; i++) {
        y = y > 9 ? y = 0 : y ;
          ship.coords.push([x,y])
          y++;
        } 
        x++;
      } 
    ); 
    return this.ships;
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
module.exports = Board
const board = new Board();
console.log(board.setShips());
console.log(board.placeShips());
board.ships.forEach(ship => {
  console.log(ship);
});