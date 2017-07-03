const graphql = require('graphql');
const {
  AddResp,
  UpdateRemoveResp,
} = require('../types/responses');
const YesNoEnum = require('../types/yes-no-enum');
const {
  addBeer: add,
  updateBeer: update,
  deleteBeer: remove,
} = require('../utils/api');

const {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} = graphql;

const getArgs = (isAdd) => {
  const args = {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the beer',
    },
    styleId: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'ID corresponding to the appropriate style',
    },
    description: {
      type: GraphQLString,
      description: 'A little bit about the beer',
    },
    abv: {
      type: GraphQLString,
      description: 'ABV percentage of the beer',
    },
    ibu: {
      type: GraphQLString,
      description: 'Measured IBUs of the beer',
    },
    glasswareId: {
      type: GraphQLID,
      description: 'ID corresponding to the appropriate glassware',
    },
    srmId: {
      type: GraphQLString,
      description: 'ID corresponding to the appropriate SRM',
    },
    availableId: {
      type: GraphQLInt,
      description: 'ID corresponding to the appropriate beer availability setting',
    },
    isOrganic: {
      type: YesNoEnum,
      description: 'Whether or not the beer is certified organic or not',
    },
    beerVariationId: {
      type: GraphQLString,
      description: 'ID of an existing beer that this beer is a variation of',
    },
    year: {
      type: GraphQLString,
      description: 'Vintage of the beer, if applicable',
    },
    foodPairings: {
      type: GraphQLString,
      description: 'Information about what foods should be paired with the beer',
    },
    servingTemperature: {
      type: GraphQLString,
      description: 'Recommended serving temperature of the beer',
    },
    originalGravity: {
      type: GraphQLString,
      description: 'Measured original gravity of the beer',
    },
    label: {
      type: GraphQLString,
      description: 'Base64 encoded image to be assigned as the beer label',
    },
  };

  if (isAdd) {
    return Object.assign({}, args, {
      brewery: {
        type: GraphQLString,
        description: 'Comma separated list of existing brewery IDs to add this beer to',
      },
    });
  }

  return Object.assign({}, args, {
    id: {
      type: GraphQLID,
      description: 'ID of beer to update',
    },
  });
};

const addBeer = {
  type: AddResp,
  args: getArgs(true),
  resolve(_, data) {
    return add(data);
  },
};

const removeBeer = {
  type: UpdateRemoveResp,
  args: {
    id: {
      type: GraphQLID,
      description: 'ID of beer to delete',
    },
  },
  resolve(_, { id }) {
    return remove(id);
  },
};

const updateBeer = {
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
  addBeer,
  removeBeer,
  updateBeer,
};
