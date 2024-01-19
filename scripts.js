var senha = document.getElementById("inp")
function mostrarOcultarSenha(){
    if(senha.type=="password"){
        senha.type = "text"
    }else{
        senha.type = "password"
    }
}