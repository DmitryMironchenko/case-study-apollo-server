const { data: { artworks } } = require('./artworks.json')

module.exports = {
  artworks: (parent, { limit = 10, offset = 0 }) => artworks.slice(offset, offset + limit)
}
