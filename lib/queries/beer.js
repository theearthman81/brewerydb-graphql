const graphql = require('graphql');
const {
  getBeer,
} = require('../utils/api');
const Beer = require('../types/beer');
const YesNoEnum = require('../types/yes-no-enum');

const {
  GraphQLNonNull,
  GraphQLString,
} = graphql;

const beer = {
  type: Beer,
  description: 'Get a single beer',
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Beer id',
    },
    withBreweries: {
      type: YesNoEnum,
      description: 'Get beer results with brewery information included.',
    },
  },
  resolve(_, { id, withBreweries = 'Y' }) {
    return getBeer(id, withBreweries);
  },
};

module.exports = beer;
