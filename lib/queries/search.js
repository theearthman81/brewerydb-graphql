const graphql = require('graphql');
const {
  search: doSearch,
} = require('../utils/api');
const Search = require('../types/search');
const YesNoEnum = require('../types/yes-no-enum');

const {
  GraphQLEnumType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} = graphql;

const SearchType = new GraphQLEnumType({
  name: 'SearchType',
  values: {
    beer: {
      value: 'beer',
    },
    brewery: {
      value: 'brewery',
    },
  },
});

const search = {
  type: Search,
  description: 'Get a single brewery',
  args: {
    q: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'search term',
    },
    type: {
      type: new GraphQLNonNull(SearchType),
      description: 'search type',
    },
    p: {
      type: GraphQLInt,
      description: 'page number',
    },
    withBreweries: {
      type: YesNoEnum,
      description: 'Get beer results with brewery information included.',
    },
  },
  resolve(_, { q, type, p = 1, withBreweries = 'Y' }) {
    return doSearch(q, type, p, withBreweries);
  },
};

module.exports = search;
