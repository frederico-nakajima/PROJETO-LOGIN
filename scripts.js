var senha = document.getElementById("input-01")
function mostrarOcultarSenha(){
    if(senha.type=="password"){
        senha.type = "text"
    }else{
        senha.type = "password"
    }
}