const graphql = require('graphql');

const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const AddRespData = new GraphQLObjectType({
  name: 'AddRespData',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
  }),
});

const AddResp = new GraphQLObjectType({
  name: 'AddResp',
  fields: () => ({
    data: {
      type: AddRespData,
    },
    message: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
  }),
});

const UpdateRemoveResp = new GraphQLObjectType({
  name: 'UpdateRemoveResp',
  fields: () => ({
    data: {
      type: GraphQLString,
    },
    message: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
  }),
});

module.exports = {
  AddResp,
  UpdateRemoveResp,
};
