let conteudoDiv = document.getElementById('conteudo')

fetch('https://localhost:5000')
    .then(resposta => resposta.json())
    .then(dados => {
        for (dado of dados){
            let paragrafo = document.createElement('p')
            paragrafo.textContent = dado.nome
            conteudoDiv.appendChild(paragrafo)
        }
        
    })