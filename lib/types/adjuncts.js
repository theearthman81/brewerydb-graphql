const graphql = require('graphql');

const {
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const adjunctFields = {
  category: {
    type: GraphQLString,
  },
  categoryDisplay: {
    type: GraphQLString,
  },
  createDate: {
    type: GraphQLString,
  },
  id: {
    type: GraphQLID,
  },
  name: {
    type: GraphQLString,
  },
};

const AdjunctItem = new GraphQLObjectType({
  name: 'AdjunctItem',
  fields: () => (Object.assign({}, adjunctFields)),
});

const Adjunct = new GraphQLObjectType({
  name: 'Adjunct',
  fields: Object.assign({}, adjunctFields, {
    description: {
      type: GraphQLString,
    },
    updatedDate: {
      type: GraphQLString,
    },
  }),
});

const Adjuncts = new GraphQLObjectType({
  name: 'Adjuncts',
  fields: () => ({
    currentPage: {
      type: GraphQLInt,
    },
    data: {
      type: new GraphQLList(AdjunctItem),
    },
    numberOfPages: {
      type: GraphQLInt,
    },
    totalResults: {
      type: GraphQLInt,
    },
  }),
});

module.exports = {
  Adjunct,
  Adjuncts,
};
