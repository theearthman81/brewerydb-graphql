const graphql = require('graphql');
const {
  Adjunct,
} = require('./adjuncts');
const Glass = require('./glass');
const Images = require('./images');
const Style = require('./style');
const YesNoEnum = require('./yes-no-enum');
const {
  getAdjunctsForBeer,
} = require('../utils/api');

const {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const Beer = new GraphQLObjectType({
  name: 'Beer',
  fields: () => {
    const Brewery = require('./brewery'); // eslint-disable-line global-require
    return {
      id: {
        type: GraphQLID,
      },
      abv: {
        type: GraphQLString,
      },
      name: {
        type: GraphQLString,
      },
      breweries: {
        type: new GraphQLList(Brewery),
      },
      glass: {
        type: Glass,
      },
      style: {
        type: Style,
      },
      createDate: {
        type: GraphQLString,
      },
      labels: {
        type: Images,
      },
      styleId: {
        type: GraphQLID,
      },
      updateDate: {
        type: GraphQLString,
      },
      glasswareId: {
        type: GraphQLID,
      },
      isOrganic: {
        type: YesNoEnum,
      },
      status: {
        type: GraphQLString,
      },
      statusDisplay: {
        type: GraphQLString,
      },
      adjuncts: {
        type: new GraphQLList(Adjunct),
        resolve({ id }) {
          return getAdjunctsForBeer(id);
        },
      },
    };
  },
});

module.exports = Beer;
