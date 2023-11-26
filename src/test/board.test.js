const Board = require('../gameboard.js');

test('board loads fleet', () => {
  expect(new Board()).toMatchObject({"ships":[
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

const testGame = new Board();
testGame.ships[9].coords.push(0,0);
test('attack ship and ket it sink', () => {
  expect(testGame.receiveAttack(0,0)).toBe(true);
})