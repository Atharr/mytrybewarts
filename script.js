let loginBtn = document.querySelector('#login-btn');
let loginInput = document.querySelector('#login-input');
let passInput = document.querySelector('#pass-input');

document.addEventListener('click', function (login) {
  if (login.target.id == "login-btn") {
    if(loginInput.value === "tryber@teste.com" && passInput.value === "123456") {
      return 'Olá, Tryber!'
    }}
});
