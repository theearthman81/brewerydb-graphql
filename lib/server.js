const express = require('express');
const expressGraphQL = require('express-graphql');
const helmet = require('helmet');
const cors = require('cors');
const schema = require('./schema');

const app = express();

app.use(
  cors(),
  helmet()
);

app.use('/graphql', expressGraphQL(() => ({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
})));

module.exports = app;
