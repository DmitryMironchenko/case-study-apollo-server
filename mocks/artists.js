const { data: { artists } } = require('./artists.json')

module.exports = {
  artists: (parent, { query, limit = 10, offset = 0 }) => artists
    .filter(a => !query || new RegExp(query, 'gi').test(a.name) )
    .slice(offset, limit + offset)
}
