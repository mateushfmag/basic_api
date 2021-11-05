require('dotenv/config')
exports.teste = (req,res) => {
    return res.status(200).json({
        Mensagem: 'so o basico',
        env: process.env.TESTE || 'deu ruim no env'
    })
}