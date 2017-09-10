const create = (proto, props) =>
  Object.assign(Object.create(proto), props)

module.exports = { create }