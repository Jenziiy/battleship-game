Player = require('../model/player');

test('create new player', () => {
  expect(new Player('jz', 12).name).toBe('jz');
})