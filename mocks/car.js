const _ = require('lodash')
const { data: { compoundAnnualReturns } } = require('./car3305.json')

module.exports = {
  compoundAnnualReturns: (parent, { artistId }) => {
    if (artistId === 3505) {
      return compoundAnnualReturns
    }
    return null
  }
}
