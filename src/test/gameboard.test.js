const GameBoard = require('../gameboard.js');
const Ship = require('../ship.js');

test('gameboard loads fleet', () => {
  expect(new GameBoard()).toMatchSnapshot({"ships":[
   { length: 4, coords: null, hits: 0, sunk: false },
   { length: 3, coords: null, hits: 0, sunk: false },
   { length: 3, coords: null, hits: 0, sunk: false },
   { length: 2, coords: null, hits: 0, sunk: false },
   { length: 2, coords: null, hits: 0, sunk: false },
   { length: 2, coords: null, hits: 0, sunk: false },
   { length: 1, coords: null, hits: 0, sunk: false },
   { length: 1, coords: null, hits: 0, sunk: false },
   { length: 1, coords: null, hits: 0, sunk: false },
   { length: 1, coords: null, hits: 0, sunk: false }]})
})