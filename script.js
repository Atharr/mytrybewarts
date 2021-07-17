
function btnLogin () {
document.getElementById("login").addEventListener("click", () => {

    const nomeDeUsuario = document.getElementById("nomeDeUsuario").value;
    const senhaDeUsuario = document.getElementById("senhaDeUsuario").value;
    
    if (senhaDeUsuario === "123456" && nomeDeUsuario === "tryber@teste.com"){
        alert("Olá, Tryber!");
    }else {
       alert("Login ou senha inválidos.");
    }
});
}

window.onload = () => {
    btnLogin();
}


