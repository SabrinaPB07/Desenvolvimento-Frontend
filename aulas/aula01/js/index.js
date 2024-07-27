const http = require('http')
const port = 5000

const produtos = [
    {nome: 'Bolu de murango', valor: 1000000000},
    {nome: 'bole de chocolate', valor: 30},
]
const requestHandler = (req, res) => {
    res.setHeader('Acess-Control-Allow-Origin', '*')
    return res.end(JSON.stringify(produtos))
}

const server = http.createServer(requestHandler)

server.listen(port, () => {
    console.log('Servidor rodando na porta 5000')
})