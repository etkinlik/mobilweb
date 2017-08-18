const DataStore = require('js-data').Container
const HttpAdapter = require('js-data-http').HttpAdapter

const httpAdapter = new HttpAdapter({
    basePath: 'http://askmilazimapi.app'
});

const store = new DataStore();

store.registerAdapter('http', httpAdapter, { 'default': true });

store.defineMapper('register');

module.exports = store