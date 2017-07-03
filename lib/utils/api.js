const request = require('request-promise');
const log = require('npmlog');

const base = 'https://api.brewerydb.com/v2';
const key = process.env.API_KEY;

const makeRequest = (path, data, method = 'GET') =>
  request({
    method,
    data,
    uri: `${base}${path}${path.includes('?') ? '&' : '?'}key=${key}`,
    json: true,
  })
    .then((resp) => {
      log.info(`${base}${path}?key=${key}`);
      return resp;
    })
    .catch((err) => {
      log.error(err);
      return err;
    });

const getAdjuncts = () => makeRequest('/adjuncts');

const getAdjunct = id => makeRequest(`/adjunct/${id}`).then(({ data }) => data);

const addAdjunct = (beerId, adjunctId) => makeRequest(`/beer/${beerId}/adjuncts`, { adjunctId }, 'POST');

const deleteAdjunct = (beerId, adjunctId) => makeRequest(`/adjunct/${beerId}/${adjunctId}`, undefined, 'DELETE');

const getAdjunctsForBeer = id => makeRequest(`/beer/${id}/adjuncts`).then(({ data }) => data);

const getBeer = id => makeRequest(`/beer/${id}`).then(({ data }) => data);

const addBeer = beer => makeRequest('/beer', beer, 'POST');

const updateBeer = (id, beer) => makeRequest(`/beer/${id}`, beer, 'PUT');

const deleteBeer = id => makeRequest(`/beer/${id}`, undefined, 'DELETE');

const getBrewery = id => makeRequest(`/brewery/${id}`).then(({ data }) => data);

const addBrewery = beer => makeRequest('/brewery', beer, 'POST');

const updateBrewery = (id, beer) => makeRequest(`/brewery/${id}`, beer, 'PUT');

const deleteBrewery = id => makeRequest(`/brewery/${id}`, undefined, 'DELETE');

const getBeersForBrewery = id => makeRequest(`/brewery/${id}/beers`).then(({ data }) => data);

const getCategories = () => makeRequest('/categories').then(({ data }) => data);

const getCategory = id => makeRequest(`/category/${id}`).then(({ data }) => data);

const getGlass = id => makeRequest(`/glass/${id}`).then(({ data }) => data);

const getGlassware = () => makeRequest('/glassware').then(({ data }) => data);

const getStyle = id => makeRequest(`/style/${id}`).then(({ data }) => data);

const getStyles = () => makeRequest('/styles').then(({ data }) => data);

const search = (q, type, p, withBreweries) => makeRequest(`/search?q=${q}&type=${type}&p=${p}&withBreweries=${withBreweries}`);

module.exports = {
  getAdjunct,
  getAdjuncts,
  addAdjunct,
  deleteAdjunct,
  getAdjunctsForBeer,
  getBeer,
  addBeer,
  updateBeer,
  deleteBeer,
  getBrewery,
  addBrewery,
  updateBrewery,
  deleteBrewery,
  getBeersForBrewery,
  getCategories,
  getCategory,
  getGlass,
  getGlassware,
  getStyle,
  getStyles,
  search,
};
