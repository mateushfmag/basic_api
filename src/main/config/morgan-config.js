const morgan = require('morgan')
const app_info = require('../../../package.json')
require('dotenv')
exports.morganConfig = (app) => {
    morgan.token('time',function getTime(){
        return `[${new Date().toLocaleString('pt-br')}]`
    })
    morgan.token('version',function getVersion(){
        return `[${app_info.version}]`
    })
    morgan.token('hostname',function getHost(req){
        return req.hostname
    })
    morgan.token('body',function getBody(req){
        try{
            return JSON.stringify(req.body).substring(0,500)   // tamanho maximo de log
        }catch(err){
            return '-'
        }
    })
    morgan.token('reqParams',function getBody(req){
        try{
            return JSON.stringify(req.params).substring(0,500)   // tamanho maximo de log
        }catch(err){
            return '-'
        }
    })
    app.use(morgan(':version :time Requisicao :method recebida em :hostname:url \nStatus::status',{
        skip: function(req,res){ 
            // if(process.env.AMBIENTE_min == 'prod')
            //     return res.statusCode < 400 
            // return false
        }
    }))
    app.use(morgan(':version :time OCORREU UM ERRO!     \nCorpo da requisicao::body \nParametros URL::reqParams',{
        skip: function(req,res){ 
            return res.statusCode < 400 
        }
    }))
}
