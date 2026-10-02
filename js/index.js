function acesso(){

    let usuario = document.getElementById("id_usuario").value;
    let senha = document.getElementById("id_senha").value;
    let botao = document.getElementById("id_botao_acesso");

    if(botao.className == "ativado"){
    localStorage.setItem('nome',usuario);
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