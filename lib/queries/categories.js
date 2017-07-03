const graphql = require('graphql');
const {
  getCategory,
  getCategories,
} = require('../utils/api');
const Category = require('../types/category');

const {
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const category = {
  type: Category,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The unique id of the category',
    },
  },
  resolve(_, { id }) {
    return getCategory(id);
  },
};

const categories = {
  type: new GraphQLList(Category),
  description: 'List of beer categories',
  resolve() {
    return getCategories();
  },
};

module.exports = {
  category,
  categories,
};
