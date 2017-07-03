const {
  adjunct,
  adjuncts,
} = require('./adjuncts');
const beer = require('./beer');
const brewery = require('./brewery');
const {
  category,
  categories,
} = require('./categories');
const {
  glass,
  glassware,
} = require('./glassware');
const {
  style, // TODO - make only one query with optional ID.
  styles,
} = require('./styles');
const search = require('./search');

module.exports = {
  adjunct,
  adjuncts,
  beer,
  brewery,
  category,
  categories,
  glass,
  glassware,
  style,
  styles,
  search,
};
