

function acesso(){

    let nome = document.getElementById("id_usuario").value;
    let senha = document.getElementById("id_senha").value;
    let botao = document.getElementById("id_botao_acesso");

    //vendo se a classe ta certa (ou seja, tem mais de 1 carcter na senha e no usuario)
    if(botao.className == "ativado"){

    usuario = {
        "pontos" : 0,
        "nome": nome
    }

    localStorage.setItem(nome,JSON.stringify(usuario));
    window.location.href = "../html/blue_lock.html"    
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

    for ( i = 0; i < localStorage.length; i++){

        let chave = localStorage.key(i);
        let valor = JSON.parse(localStorage.getItem(chave))

        console.log(chave,valor)
    }
    

    Swal.fire({
        title: "Ranking",
        html: ``,
        icon: "success",
        draggable: true
});
}