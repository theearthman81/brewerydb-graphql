const graphql = require('graphql');
const {
  AddResp,
  UpdateRemoveResp,
} = require('../types/responses');
const YesNoEnum = require('../types/yes-no-enum');
const {
  addBrewery: add,
  updateBrewery: update,
  deleteBrewery: remove,
} = require('../utils/api');

const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
} = graphql;

const getArgs = isAdd => ({
  name: {
    type: isAdd ? new GraphQLNonNull(GraphQLString) : GraphQLString,
    description: 'Name of the brewery',
  },
  description: {
    type: GraphQLString,
    description: 'A little bit about the brewery',
  },
  website: {
    type: GraphQLString,
    description: 'Url of the breweries website',
  },
  established: {
    type: GraphQLString,
    description: 'Year brewery was established. Format YYYY',
  },
  mailingListUrl: {
    type: GraphQLString,
    description: 'Url of the breweries mailing list',
  },
  isOrganic: {
    type: YesNoEnum,
  },
  image: {
    type: GraphQLString,
    description: 'Base64 encoded image',
  },
});

const addBrewery = {
  type: AddResp,
  args: getArgs(true),
  resolve(_, data) {
    return add(data);
  },
};

const removeBrewery = {
  type: UpdateRemoveResp,
  args: {
    id: {
      type: GraphQLID,
      description: 'ID of brewery to delete',
    },
  },
  resolve(_, { id }) {
    return remove(id);
  },
};

const updateBrewery = {
  type: UpdateRemoveResp,
  args: getArgs(false),
  resolve(_, data) {
    const {
      id,
    } = data;
    delete data.id; // eslint-disable-line no-param-reassign

    return update(id, data);
  },
};

module.exports = {
  addBrewery,
  removeBrewery,
  updateBrewery,
};
