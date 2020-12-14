const express = require("express");
const { bodyParserConfig } = require('./bodyParser-config')
const { corsConfig } = require('./cors-config')
const { routesConfig } = require('./routes-config')
const { morganConfig } = require('./morgan-config')

const app = express();

bodyParserConfig(app);
corsConfig(app);
morganConfig(app);
routesConfig(app);

module.exports = app
