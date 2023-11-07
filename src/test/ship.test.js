// test the public methods in the ship class
const ship = require('../ship.js');

test('create new ship with given length', () => {
  expect(new ship(4)).toEqual({
     length: 4, coords: null, hits: 0, sunk: false })
});
