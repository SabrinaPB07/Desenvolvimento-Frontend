const express = require(`express`)
const app = express()
const porta = 5000

let produtos = [
    {
        nome: "Boneca Barbie: O filme - dia perfeito",
        valor: 500,
        descricao: "Barbie usando seu look em seu dia perfeito na barbieland",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_880495-MLB72634711463_112023-O.webp",
    },
    {
        nome: "Boneca Barbie: escola de princesas",
        valor: 350,
        descricao: "o melhor filme da barbie, a boneca tem 2 visuais, identica ao filme",
        imagem: "https://4.bp.blogspot.com/-_qPrgGAmd4I/ThI5fU4z5-I/AAAAAAAAAGM/hMfLM7U9KA4/s1600/barbie-princess-charm-school-barbie-movies-19250623-1008-934.jpg"
    },
    {
        nome: "barbie David bowie",
        valor: 250,
        descricao: "Apenas a melhor boneca do mundo homenageando o melhor cantor do mundo",
        imagem: "https://www.b-dollsplanet.de/images/product_images/original_images/FXD84_4.jpg"
    }
]

app.get('/produto',(requisicao, resposta) => {
    try {
        return resposta.json(produtos).status(200)
    } catch (error) {
        return resposta.json({message: "operação invalida"}).status(400)
    }
    
})

app.listen(porta, () => {
    console.log(`server listen on http://localhost:${porta}`)
})