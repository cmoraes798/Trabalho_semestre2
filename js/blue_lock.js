//pegando qual o usuario logado
let usuario_ativo = sessionStorage.key(0)
let pontos_ini = localStorage.getItem(usuario_ativo)
let mostrar_user = document.getElementById("id_user")
mostrar_user.innerHTML = `${usuario_ativo} tem: ${pontos_ini} pontos!`

const personagens = [

    Isagi, Nagi, Raichi

]
let personagemEscolhido

const chutes = []

let inputChute = document.getElementById('inputChute')

let articleTimer = document.getElementById('articleTimer')
let tbodyPersonagem = document.getElementById('tbodyPersonagem')
let datalistPersonagens = document.getElementById('datalistPersonagens')

let timerCorrendo
let segundosPassados = 0 //Controla os segundos
let contador //Aqui encima pras duas funções acessarem

function completarListaDePersonagens(){ //Completa a lista de sugestões da pesquisa com os personagens do array e tbm sorteia o personagem inicial pra adivinhar

    for (const personagem of personagens) {

        let opt = document.createElement('option')
        opt.value = personagem.nome
        opt.text = personagem.nome

        datalistPersonagens.appendChild(opt)
        
    }

    sortearPersonagem()

}

function randomizador(){ //Sorteia um num pra decidir um personagem aleatorio

    const num = Math.floor(Math.random() * personagens.length);

    return num

}

function sortearPersonagem(){ //Sorteia o personagem aleatorio

    personagemEscolhido = personagens[randomizador()] //Escolhe um personagem aleatório
    console.log(personagemEscolhido)

}

//-------//

function iniciarTimer(){ //Inicia ne

    contador = setInterval(() => { //Faz função a cada tal milissegundos

        segundosPassados ++
        articleTimer.innerHTML = `Tempo corrido: ${segundosPassados}`

        console.log(segundosPassados)
        
    }, 1000); //Os milissegundos

    timerCorrendo = true

}

function finalizarTimer(){ //Finaliza ne

    if (contador) {

        clearInterval(contador) //Limpa ué
        
    }

}

//-------//

function validarChute(){ //Toda a budega pra validar o que o usuario escreveu no chute


    //Timer--------//


    if (timerCorrendo != true){

        iniciarTimer()

    }

    let nomeChutado = inputChute.value
    let personagemChutado


    //Encontrar o personagem que o cabron escreveu--------//


    for (const personagemTalvez of personagens) {
        
        if (personagemTalvez.nome.toLowerCase() === nomeChutado.toLowerCase()){

            personagemChutado = personagemTalvez

        }

    }

    //to usando ja pra ver se ta funcionando os pontos
    if(personagemChutado == personagemEscolhido){

        
        //pegando qual o usuario logado
        let usuario_ativo = sessionStorage.key(0)
        let pontos = Number(localStorage.getItem(usuario_ativo))

        sessionStorage.setItem(usuario_ativo,pontos+1)
        localStorage.setItem(usuario_ativo,pontos+1 )

        finalizarTimer()

        let mostrar_user = document.getElementById("id_user")
        mostrar_user.innerHTML = `${usuario_ativo} tem: ${pontos+1} pontos!`
    }
    inputChute.value = ''


    //Pra armazenar os valores do personagem chutado e do sorteado e usar dps na tabela--------//


    let arco = personagemChutado.arco
    let posicao = personagemChutado.posicao
    let pais = personagemChutado.pais
    let clube = personagemChutado.clube
    let cabelo = personagemChutado.cabelo
    let olho = personagemChutado.olho
    let altura = personagemChutado.altura

    let dadosPersonagemChutado = [arco, posicao, pais, clube, cabelo, olho, altura]
    //Esses dois devem estar na MESMA ORDEM
    let dadosPersonagemEscolhido = [

        personagemEscolhido.arco,
        personagemEscolhido.posicao,
        personagemEscolhido.pais,
        personagemEscolhido.clube,
        personagemEscolhido.cabelo,
        personagemEscolhido.olho,
        personagemEscolhido.altura

    ]

    chutes.unshift(dadosPersonagemChutado) //Adiciona o chute (em array) no começo do array

    tbodyPersonagem.innerHTML = '' //Limpa a table pra percorrer e adicionar dnv


    //Pra verificar quais valores acertou e quais errou--------//

    
    let acertos = []

    for (const valor of dadosPersonagemChutado){

        let i = dadosPersonagemChutado.indexOf(valor)

        if(valor == dadosPersonagemEscolhido[i]){ //se termoChutado == termoCerto (tipo se cabelo loiro == preto)

            acertos.push(valor)

        }

    }

    console.log(acertos)


    //Pra escrever na tabela--------//


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

function ranking(){ //Mermao, QUE (fica pra vc isso ai)

    let usuarios = [];

    for (i = 0; i < localStorage.length; i++) {
        let chave = localStorage.key(i);
        let valor = Number(localStorage.getItem(chave));

        usuarios.push({chave,valor})
    }

    usuarios.sort((a,b) => b.valor - a.valor);

    console.log(usuarios)
    let resposta = ""
    for (i = 0; i <localStorage.length; i++){
        resposta +=  `${i+1}º lugar: ${usuarios[i].chave} com ${usuarios[i].valor} <br>`
    }

    Swal.fire({
        title: "Ranking",
        html: `${resposta}`,
        icon: "success",
        draggable: true
});
}