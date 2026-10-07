
sessionStorage.clear()

function acesso(){

    let nome = document.getElementById("id_usuario").value;
    let senha = document.getElementById("id_senha").value;
    let botao = document.getElementById("id_botao_acesso");

    let usuarios_nomes = Object.keys(localStorage)

    if (usuarios_nomes.includes(nome)){
        Swal.fire({
        title: "Escolha outro nome!",
        html: `ja existe um usuario com esse nome.`,
        icon: "error",
        draggable: true
        })

        return;
    }else{
        //vendo se a classe ta certa (ou seja, tem mais de 1 carcter na senha e no usuario)
        if(botao.className == "ativado"){
            localStorage.setItem(nome,0)
            sessionStorage.setItem(nome,0)
        
            window.location.href = "../html/blue_lock.html"
        }else{
            Swal.fire({
            title: "Minimo de caracteres",
            html: `Minimo de 1 caractere por nome e senha!`,
            icon: "error",
            draggable: true
        })
        }
        
}
}

function verificar(){

    console.log()
    let usuario = document.getElementById("id_usuario").value;
    let senha = document.getElementById("id_senha").value;
    let botao = document.getElementById("id_botao_acesso");

    if (usuario.length < 1 || senha.length < 1){
        botao.className = "desativado";
    }else{
        botao.className = "ativado";
    }
}


function ranking(){

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