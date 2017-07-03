const graphql = require('graphql');
const YesNoEnum = require('./yes-no-enum');

const {
  GraphQLFloat,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const Location = new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    status: {
      type: GraphQLString,
    },
    statusDisplay: {
      type: GraphQLString,
    },
    locationTypeDisplay: {
      type: GraphQLString,
    },
    updateDate: {
      type: GraphQLString,
    },
    region: {
      type: GraphQLString,
    },
    latitude: {
      type: GraphQLFloat,
    },
    reginPlanningion: {
      type: YesNoEnum,
    },
    name: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLID,
    },
    regopenToPublicion: {
      type: YesNoEnum,
    },
    isClosed: {
      type: YesNoEnum,
    },
    website: {
      type: GraphQLString,
    },
    longitude: {
      type: GraphQLFloat,
    },
    locationType: {
      type: GraphQLString,
    },
    postalCode: {
      type: GraphQLString,
    },
    isPrimary: {
      type: YesNoEnum,
    },
    countryIsoCode: {
      type: GraphQLString,
    },
    createDate: {
      type: GraphQLString,
    },
    breweryId: {
      type: GraphQLID,
    },
    locality: {
      type: GraphQLString,
    },
    streetAddress: {
      type: GraphQLString,
    },
  }),
});

module.exports = Location;
