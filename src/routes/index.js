const routes = require('express').Router();
const BasicController = require('../controllers/BasicController');

const info = {
    MSG: 'API Basic',
    DETALHES: {
        Versão: process.env.VERSAO || '0.0.1'
    },
}
// Rota padrão
routes.get('/', (req, res, next) => {
	res.status(200).json(info);
});
routes.get('/basic',BasicController.teste)
routes.get("/ping", (req,res) => res.send("pong"))
module.exports = routes;
