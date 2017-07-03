const graphql = require('graphql');
const Beer = require('./beer');
const Brewery = require('./brewery');

const {
  GraphQLList,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLUnionType,
} = graphql;

const SearchResults = new GraphQLUnionType({
  name: 'SearchResults',
  types: [Beer, Brewery],
  resolveType(data) {
    if (data.abv) {
      return Beer;
    }

    return Brewery;
  },
});

const Search = new GraphQLObjectType({
  name: 'Search',
  fields: () => ({
    currentPage: {
      type: GraphQLInt,
    },
    data: {
      type: new GraphQLList(SearchResults),
    },
    numberOfPages: {
      type: GraphQLInt,
    },
  }),
});

module.exports = Search;
