const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const Images = new GraphQLObjectType({
  name: 'Images',
  fields: () => ({
    medium: {
      type: GraphQLString,
    },
    large: {
      type: GraphQLString,
    },
    icon: {
      type: GraphQLString,
    },
  }),
});

module.exports = Images;
