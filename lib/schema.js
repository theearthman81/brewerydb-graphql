const graphql = require('graphql');
const queries = require('./queries');
const mutations = require('./mutations');

const {
  GraphQLObjectType,
  GraphQLSchema,
} = graphql;


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: queries,
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutation',
    fields: mutations,
  }),
});

module.exports = schema;
