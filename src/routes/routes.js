const routes = require('express').Router();
const basic = require('../controllers/basic');

const info = {
    MSG: 'API Basic',
    DETALHES: {
        Versão: process.env.VERSAO
    },
}
// Rota padrão
routes.get('/', (req, res, next) => {
	res.status(200).json(info);
});
routes.get('/basic',basic.teste)
module.exports = routes;
