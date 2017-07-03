const graphql = require('graphql');

const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const Glass = new GraphQLObjectType({
  name: 'Glass',
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

module.exports = Glass;
