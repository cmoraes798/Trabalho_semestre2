const personagens = [

    Isagi, Nagi, Raichi

]

const chutes = []

let inputChute = document.getElementById('inputChute')

let segundosPassados = 0 //Controla os segundos
let contador //Aqui encima pras duas funções acessarem

let articleTimer = document.getElementById('articleTimer')
let timerCorrendo

let tbodyPersonagem = document.getElementById('tbodyPersonagem')

let datalistPersonagens = document.getElementById('datalistPersonagens')

function completarListaDePersonagens(){ //Completa a lista de sugestões da pesquisa com os personagens do array

    for (const personagem of personagens) {

        let opt = document.createElement('option')
        opt.value = personagem.nome
        opt.text = personagem.nome

        datalistPersonagens.appendChild(opt)
        
    }

}

function randomizador(){

    const num = Math.floor(Math.random() * personagens.length);

    return num

}

let personagemEscolhido = personagens[randomizador()] //Escolhe um personagem aleatório
console.log(personagemEscolhido)

//-------//

function iniciarTimer(){

    contador = setInterval(() => { //Faz função a cada tal milissegundos

        segundosPassados ++
        articleTimer.innerHTML = `Tempo corrido: ${segundosPassados}`

        console.log(segundosPassados)
        
    }, 1000); //Os milissegundos

    timerCorrendo = true

}

function finalizarTimer(){

    if (contador) {

        clearInterval(contador) //Limpa ué
        
    }

}

//-------//

function validarChute(){

    if (timerCorrendo != true){

        iniciarTimer()

    }

    let nomeChutado = inputChute.value
    let personagemChutado

    for (const personagemTalvez of personagens) {
        
        if (personagemTalvez.nome.toLowerCase() === nomeChutado.toLowerCase()){

            personagemChutado = personagemTalvez

        }

    }

    inputChute.value = ''

    let arco = personagemChutado.arco
    let posicao = personagemChutado.posicao
    let pais = personagemChutado.pais
    let clube = personagemChutado.clube
    let cabelo = personagemChutado.cabelo
    let olho = personagemChutado.olho
    let altura = personagemChutado.altura

    let dados = [arco, posicao, pais, clube, cabelo, olho, altura]
    chutes.unshift(dados) //Adiciona o chute (em array) no começo do array

    tbodyPersonagem.innerHTML = '' //Limpa a table pra percorrer e adicionar dnv

    for (const personagem of chutes) { //Cria uma linha de tabela (tr = table row = linha de tabela) pra cada registro e adiciona no corpo

        let novoTr = 

        //arco
        //posicao
        //pais
        //clube
        //cabelo
        //olho
        //altura
        
        `<tr>

            <th>${personagem[0]}</th> 
            <th>${personagem[1]}</th>
            <th>${personagem[2]}</th>
            <th>${personagem[3]}</th>
            <th>${personagem[4]}</th>
            <th>${personagem[5]}</th>
            <th>${personagem[6]} cm</th>

        </tr>`

        tbodyPersonagem.innerHTML += novoTr
        
    }

}