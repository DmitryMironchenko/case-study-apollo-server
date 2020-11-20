const { data: { artists } } = require('./artists.json')

module.exports = {
  artists: (parent, { limit = 10, offset = 0 }) => artists.slice(offset, limit + offset)
}
