const graphql = require('graphql');
const {
  getStyle,
  getStyles,
} = require('../utils/api');
const Style = require('../types/style');

const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const style = {
  type: Style,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The unique id of the style',
    },
  },
  resolve(_, { id }) {
    return getStyle(id);
  },
};

const styles = {
  type: new GraphQLList(Style),
  description: 'List of beer styles',
  resolve() {
    return getStyles();
  },
};

module.exports = {
  style,
  styles,
};
