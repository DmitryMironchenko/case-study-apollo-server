const { buildClientSchema } = require('graphql');
const { ApolloServer, MockList } = require('apollo-server');
const { artists } = require('./mocks/artists');
const { artist } = require('./mocks/artist');
const { artworks } = require('./mocks/artworks');
const { compoundAnnualReturns } = require('./mocks/car');
const { addMockFunctionsToSchema } = require('apollo-server');

const introspectionResult = require('./schema.json');

const schema = buildClientSchema(introspectionResult);

addMockFunctionsToSchema({
  schema,
  mocks: {
    Query: () => ({
      artists,
      artist,
      artworks,
      compoundAnnualReturns
    }),
  },
  preserveResolvers: false,
});

const server = new ApolloServer({
  schema,
  // mocks: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});