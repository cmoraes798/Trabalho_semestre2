const personagens = [

    Isagi, Nagi, Raichi

]

let inputChute = document.getElementById('inputChute')

let segundosPassados = 0
let contador //Aqui encima pras duas funções acessarem

let articleTimer = document.getElementById('articleTimer')
let datalistPersonagens = document.getElementById('datalistPersonagens')

function completarListaDePersonagens(){

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

//

function iniciarTimer(){

    contador = setInterval(() => { //Faz função a cada tal milissegundos

        segundosPassados ++
        articleTimer.innerHTML = `Tempo corrido: ${segundosPassados}`

        console.log(segundosPassados)
        
    }, 1000); //Os milissegundos

}

function finalizarTimer(){

    if (contador) {

        clearInterval(contador) //Limpa ué
        
    }

}

//

function validarChute(){

    let nomeChutado = inputChute.value
    let personagemChutado

    for (const personagemTalvez of personagens) {
        
        if (personagemTalvez.nome.toLowerCase() === nomeChutado.toLowerCase()){

            personagemChutado = personagemTalvez

        }

    }

    let arco = personagemChutado.arco
    let posicao = personagemChutado.posicao
    let pais = personagemChutado.pais
    let clube = personagemChutado.clube
    let cabelo = personagemChutado.cabelo
    let olho = personagemChutado.olho
    let altura = personagemChutado.altura

    console.log(arco, posicao, pais, clube, cabelo, olho, altura)

}