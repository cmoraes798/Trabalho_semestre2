//pegando qual o usuario logado
let usuario_ativo = sessionStorage.key(0)
let pontos_ini = localStorage.getItem(usuario_ativo)
let mostrar_user = document.getElementById("id_user")
mostrar_user.innerHTML = `${usuario_ativo} tem: ${pontos_ini} pontos!`

const personagens = [

    Isagi, Nagi, Raichi, Bachira, Chigiri, Barou, Rin, Kunigami,
    Reo, Gagamaru, Igarashi, Zantetsu, Aryu, Tokimitsu, Shidou, Karasu,
    Otoya, Yukimiya, Hiori, Niko, Kuon, Imamura, Naruhaya,
    Kira, Sendo, Aiku, Sae, Nanase, Kiyora, Kurona, Fukaku,
    Kaiser, Ness, Lorenzo, Noel, Prince, Lavinho, Loki, Snuffy,
    Agi, Charles

]

const chutes = []

let inputChute = document.getElementById('inputChute')
let permitirChutes = true

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

let personagemSorteado

function sortearPersonagem(){ //Sorteia o personagem aleatorio

    personagemSorteado = personagens[randomizador()] //Escolhe um personagem aleatório
    console.log(personagemSorteado)

    permitirChutes = true

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

        clearInterval(contador) //Limpa o timer ne
        
    }

}

//-------//

function iniciarChute(){ //Encontra o personagem chutado e manda pra validar (ver se acertou)

    if(chutes.length < 6 && permitirChutes == true){

        let nomeChutado = inputChute.value
        let personagemChutado

        for (const personagemTalvez of personagens) {
        
            if (personagemTalvez.nome.toLowerCase() === nomeChutado.toLowerCase()){

                personagemChutado = personagemTalvez

            }

        }

        validarChute(personagemChutado) //Manda o cabron pra ver se acertou

        
        //Timer--------//


        if (timerCorrendo != true){

            iniciarTimer()

        }

    }

}

function validarChute(personagemChutado){ //Toda a budega pra validar o que o usuario escreveu no chute

    console.log(personagemChutado)

    //Pra armazenar os valores do personagem chutado e do sorteado e usar dps na tabela--------//

    let dadosPersonagemChutado = [ //Deixa em array pra ficar melhor
        
        personagemChutado.arco,
        personagemChutado.posicao,
        personagemChutado.pais,
        personagemChutado.clube,
        personagemChutado.cabelo,
        personagemChutado.olho,
        personagemChutado.altura
    
    ]
    //Esses dois devem estar na MESMA ORDEM
    let dadosPersonagemSorteado = [

        personagemSorteado.arco,
        personagemSorteado.posicao,
        personagemSorteado.pais,
        personagemSorteado.clube,
        personagemSorteado.cabelo,
        personagemSorteado.olho,
        personagemSorteado.altura

    ]

    //Pra verificar quais valores acertou e quais errou--------//

    const cores = []

    for (const valor of dadosPersonagemChutado) {

        let i = dadosPersonagemChutado.indexOf(valor)
    
        if (valor === dadosPersonagemSorteado[i]){

            cores.push(`lightgreen`)

        }
        else{

            cores.push(`salmon`)

        }

    }

    //for (let i = 0; i < dadosPersonagemChutado.length; i++) {
        //if (dadosPersonagemChutado[i] == dadosPersonagemSorteado[i]) {
            //cores.push('lightgreen')
         //} else {
            //cores.push('salmon')
        //}
    //}

    chutes.unshift([dadosPersonagemChutado, cores]) //Me explica oq tu fez aqui, pq ficou dando erro ent eu coloquei em array msm
    tbodyPersonagem.innerHTML = '' //Limpa a table pra percorrer e adicionar dnv

    //Pra escrever na tabela--------//


    for (const personagem of chutes) { //Cria uma linha de tabela (tr = table row = linha de tabela) pra cada registro e adiciona no corpo

        //const personagem = chute.dados

        const coresPersonagemTable = personagem[1]
        const dadosPersonagemTable = personagem[0]

        let novoTr = 

        //arco
        //posicao
        //pais
        //clube
        //cabelo
        //olho
        //altura
        
        `<tr>

            <th style="background-color: ${coresPersonagemTable[0]}">${dadosPersonagemTable[0]}</th> 
            <th style="background-color: ${coresPersonagemTable[1]}">${dadosPersonagemTable[1]}</th>
            <th style="background-color: ${coresPersonagemTable[2]}">${dadosPersonagemTable[2]}</th>
            <th style="background-color: ${coresPersonagemTable[3]}">${dadosPersonagemTable[3]}</th>
            <th style="background-color: ${coresPersonagemTable[4]}">${dadosPersonagemTable[4]}</th>
            <th style="background-color: ${coresPersonagemTable[5]}">${dadosPersonagemTable[5]}</th>
            <th style="background-color: ${coresPersonagemTable[6]}">${dadosPersonagemTable[6]}</th>

        </tr>`

        tbodyPersonagem.innerHTML += novoTr
        
    }

        //to usando ja pra ver se ta funcionando os pontos
    if(personagemChutado == personagemSorteado && chutes.length <= 6){

        permitirChutes = false
        finalizarTimer()
        
        //pegando qual o usuario logado
        let usuario_ativo = sessionStorage.key(0)
        let pontos = Number(localStorage.getItem(usuario_ativo))

        sessionStorage.setItem(usuario_ativo,pontos+1)
        localStorage.setItem(usuario_ativo,pontos+1 )

        let mostrar_user = document.getElementById("id_user")
        mostrar_user.innerHTML = `${usuario_ativo} tem: ${pontos+1} pontos!`

        Swal.fire({
        title: "Meus parabens!",
        html: `Você acertou!`,
        icon: "success",
        draggable: true,
        confirmButtonText: 'Jogar novamente'
        }).then((result) => {
        
            if (result.isConfirmed) {
    
                window.location.href = "../html/blue_lock.html"

            }
        });
        sortearPersonagem()
        
    }
    else if(personagemChutado != personagemSorteado && chutes.length == 6){

        permitirChutes = false
        finalizarTimer()

        Swal.fire({ //Alert kawaii

            title: "Você perdeu!",
            text: `Suas tentativas esgotaram. O personagem correto era ${personagemSorteado.nome}!`,
            icon: "error"

        });

    }
    
    inputChute.value = ''


}

//-------//

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