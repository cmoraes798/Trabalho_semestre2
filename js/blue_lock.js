const personagens = [

    Isagi, Nagi, Raichi

]

let segundosPassados = 0
let contador //Aqui encima pras duas funções acessarem

let articleTimer = document.getElementById('articleTimer')

function randomizador(){

    const num = Math.floor(Math.random() * personagens.length);

    return num

}

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