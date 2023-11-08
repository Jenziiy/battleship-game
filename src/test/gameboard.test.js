const GameBoard = require('../gameboard.js');

test('gameboard loads fleet', () => {
  expect(new GameBoard()).toMatchObject({"ships":[
   { length: 4, coords: [], hits: 0, sunk: false },
   { length: 3, coords: [], hits: 0, sunk: false },
   { length: 3, coords: [], hits: 0, sunk: false },
   { length: 2, coords: [], hits: 0, sunk: false },
   { length: 2, coords: [], hits: 0, sunk: false },
   { length: 2, coords: [], hits: 0, sunk: false },
   { length: 1, coords: [], hits: 0, sunk: false },
   { length: 1, coords: [], hits: 0, sunk: false },
   { length: 1, coords: [], hits: 0, sunk: false },
   { length: 1, coords: [], hits: 0, sunk: false }]})
})

const testGame = new GameBoard();
testGame.ships[9].coords.push(0,0);
test('attack ship and ket it sink', () => {
  expect(testGame.receiveAttack(0,0)).toBe(true);
})