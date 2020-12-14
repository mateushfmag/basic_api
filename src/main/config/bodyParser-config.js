const bodyParser = require('body-parser');

exports.bodyParserConfig = (app) => {
  app.use(bodyParser.json({limit: '50mb', extended: true}));       
  app.use(bodyParser.urlencoded({     
    extended: true
  }));
}
