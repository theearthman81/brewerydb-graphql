const graphql = require('graphql');
const {
  getGlass,
  getGlassware,
} = require('../utils/api');
const Glass = require('../types/glass');

const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const glass = {
  type: Glass,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The unique id of the glass',
    },
  },
  resolve(_, { id }) {
    return getGlass(id);
  },
};

const glassware = {
  type: new GraphQLList(Glass),
  description: 'List of glassware',
  resolve() {
    return getGlassware();
  },
};

module.exports = {
  glass,
  glassware,
};
