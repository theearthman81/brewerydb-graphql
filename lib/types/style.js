const graphql = require('graphql');
const Category = require('./category');

const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const Style = new GraphQLObjectType({
  name: 'Style',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    category: {
      type: Category,
    },
    srmMax: {
      type: GraphQLString,
    },
    ibuMax: {
      type: GraphQLString,
    },
    srmMin: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    fgMin: {
      type: GraphQLString,
    },
    ibuMin: {
      type: GraphQLString,
    },
    createDate: {
      type: GraphQLString,
    },
    fgMax: {
      type: GraphQLString,
    },
    abvMax: {
      type: GraphQLString,
    },
    ogMin: {
      type: GraphQLString,
    },
    abvMin: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    categoryId: {
      type: GraphQLID,
    },
  }),
});

module.exports = Style;
