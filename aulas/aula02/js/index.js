const express = require(`express`)
const app = express()
const porta = 5000

let produtos = [
    {
        nome: "bolo de morangu",
        valor: 300000,
        descricao: "hmmmmm bolu de muranguuuu",
        imagem: "https://boloaniversario.com/wp-content/uploads/bolo-morango-chantilly.jpg",
    },
    {
        nome: "bolo whatzap",
        valor: 20000,
        descricao: "fiufiufiufiufiuu",
        imagem: "https://i.pinimg.com/originals/86/a1/1c/86a11c4adf57642e5b8b003219861b86.jpg"
    },
    {
        nome: "bolo",
        valor: 1000,
        descricao: "é só um bolo",
        imagem: "https://www.receiteria.com.br/wp-content/uploads/bolo-simples-branco.jpg"
    }
]

app.get('/',(requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    } catch (error) {
        return resposta.json({message: "operação invalida"}).status(400)
    }
    
})

app.get('/jogos',(requisicao, resposta) => {
    let queryUrl = requisicao.query

    return resposta.json(queryUrl).status(200)
})

app.listen(porta, () => {
    console.log(`server listen on http://localhost:${porta}`)
})