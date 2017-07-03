const graphql = require('graphql');

const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const Category = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    createDate: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});

module.exports = Category;
