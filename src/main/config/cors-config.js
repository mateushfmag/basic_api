exports.corsConfig = (app) => {
  app.use(function (req, res, next) {
    // Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType, Content-Type, Accept, Authorization, tokenacesso");
    next();
  });
}
