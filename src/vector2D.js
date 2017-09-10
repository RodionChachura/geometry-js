const { create } = require('./utils')

const Vector2D = (x, y) => create({
    scaleBy (factor) {
      return Vector2D(x * factor, y * factor)
    },
    negate () {
      return this.scaleBy(-1)
    },
    normalize () {
      return this.scaleBy(1 / this.length)
    },
    add ({ x, y }) {
      return Vector2D(this.x + x, this.y + y)
    },
    subtract ({ x, y }) {
      return Vector2D(this.x - x, this.y - y)
    },
    dotProduct ({ x, y }) {
      return (this.x * x) + (this.y + y)
    }
  }, {
    x,
    y,
    length: Math.hypot(x, y)
  }
)

module.exports = Vector2D