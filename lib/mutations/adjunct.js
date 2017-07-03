const graphql = require('graphql');
const {
  AddResp,
  UpdateRemoveResp,
} = require('../types/responses');
const {
  addAdjunct: add,
  deleteAdjunct: remove,
} = require('../utils/api');

const {
  GraphQLID,
  GraphQLNonNull,
} = graphql;

const addAdjunct = {
  type: AddResp,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of adjunct',
    },
    beerId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of beer to add adjunct to',
    },
  },
  resolve(_, { beerId, id }) {
    return add(beerId, id);
  },
};

const removeAdjunct = {
  type: UpdateRemoveResp,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of adjunct',
    },
    beerId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID of beer to delete adjunct from',
    },
  },
  resolve(_, { beerId, id }) {
    return remove(beerId, id);
  },
};

module.exports = {
  addAdjunct,
  removeAdjunct,
};
