const graphql = require('graphql');
const Beer = require('./beer');
const Location = require('./location');
const Images = require('./images');
const YesNoEnum = require('./yes-no-enum');
const {
  getBeersForBrewery,
} = require('../utils/api');

const {
  GraphQLList,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const Brewery = new GraphQLObjectType({
  name: 'Brewery',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    description: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    createDate: {
      type: GraphQLString,
    },
    mailingListUrl: {
      type: GraphQLString,
    },
    updateDate: {
      type: GraphQLString,
    },
    images: {
      type: Images,
    },
    established: {
      type: GraphQLString,
    },
    isOrganic: {
      type: YesNoEnum,
    },
    website: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
    statusDisplay: {
      type: GraphQLString,
    },
    locations: {
      type: new GraphQLList(Location),
    },
    beers: {
      type: new GraphQLList(Beer),
      resolve({ id }) {
        return getBeersForBrewery(id);
      },
    },
  }),
});

module.exports = Brewery;
