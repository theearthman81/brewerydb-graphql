const graphql = require('graphql');
const {
  getBrewery,
} = require('../utils/api');
const Brewery = require('../types/brewery');

const {
  GraphQLID,
  GraphQLNonNull,
} = graphql;

const brewery = {
  type: Brewery,
  description: 'Get a single brewery',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Brewery id',
    },
  },
  resolve(_, { id }) {
    return getBrewery(id);
  },
};

module.exports = brewery;
