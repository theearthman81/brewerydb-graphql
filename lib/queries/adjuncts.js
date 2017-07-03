const graphql = require('graphql');
const {
  getAdjunct,
  getAdjuncts,
} = require('../utils/api');
const {
  Adjunct,
  Adjuncts,
} = require('../types/adjuncts');

const {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

const adjunct = {
  type: Adjunct,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The unique id of the adjunct',
    },
  },
  resolve(_, { id }) {
    return getAdjunct(id);
  },
};

const adjuncts = {
  type: Adjuncts,
  description: 'Available adjuncts to assign to beers',
  args: {
    page: {
      type: GraphQLInt,
      description: 'Page number',
    },
  },
  resolve() {
    return getAdjuncts();
  },
};

module.exports = {
  adjunct,
  adjuncts,
};
