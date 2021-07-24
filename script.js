document.getElementById("button").addEventListener("click", () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    if(email.value=='tryber@teste.com' && password.value=='123456'){
        alert("Olá, Tryber!");
    } else{
        alert("Login ou senha inválidos.")
    }
});
