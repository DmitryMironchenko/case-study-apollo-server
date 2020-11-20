const _ = require('lodash')
const { data: { artists } } = require('./artists.json')

module.exports = {
  artist: (parent, { artistId }) => {
    return _.find(artists, (a) => a.id === artistId)
  }
}
