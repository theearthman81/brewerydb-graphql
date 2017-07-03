const graphql = require('graphql');

const {
  GraphQLEnumType,
} = graphql;

const YesNoEnum = new GraphQLEnumType({
  name: 'YesNoEnum',
  values: {
    N: {
      value: 'N',
    },
    Y: {
      value: 'Y',
    },
  },
});

module.exports = YesNoEnum;
