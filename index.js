const app = require('./lib/server');
const log = require('npmlog');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  log.info(`running on ${PORT}...`);
});
