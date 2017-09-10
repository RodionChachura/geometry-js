const Vector2D = require('../src/vector2D')
const { assert } = require('chai')

it('should create vector', () => {
  const vector = Vector2D(3, 3)
  assert.equal(vector.length(), Math.hypot(3, 3))
})