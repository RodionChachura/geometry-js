const { create } = require('./utils')

const Vector3D = (x, y, z) => create({
    scaleBy (factor) {
      return Vector2D(x * factor, y * factor, z * factor)
    },
    negate () {
      return this.scaleBy(-1)
    },
    normalize () {
      return this.scaleBy(1 / this.length)
    },
    add ({ x, y, z }) {
      return Vector2D(this.x + x, this.y + y, this.z + z)
    },
    subtract ({ x, y, z }) {
      return Vector2D(this.x - x, this.y - y, this.z + z)
    },
    dotProduct ({ x, y, z }) {
      return (this.x * x) + (this.y + y) + (this.z + z)
    }
  }, {
    x,
    y,
    z,
    length: Math.hypot(x, y, z)
  }
)

module.exports = Vector2D