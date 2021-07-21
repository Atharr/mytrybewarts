let loginBtn = document.getElementById('login-btn');
let loginInput = document.getElementById('login-input');
let passInput = document.getElementById('pass-input');

loginBtn.addEventListener('click', () => {
    if (loginInput.value != "tryber@teste.com" && passInput.value != "123456") {
      alert ('Login ou senha inválidos.')
    } else {
      alert ('Olá, Tryber!'); 
    }
  });

let btnSubmit = document.getElementById('submit');
let check = document.getElementById('agreement');

check.addEventListener('click', () => {
  
  // if (check) {
    btnSubmit.toggleAttribute('disabled');
  //}
});
