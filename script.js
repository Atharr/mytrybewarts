let loginBtn = document.getElementById('login-btn');
let loginInput = document.getElementById('login-input');
let passInput = document.getElementById('pass-input');

// loginBtn.addEventListener('click', function (login) {
//   if (login.target.id == "login-btn") {
//     if (loginInput.value == "tryber@teste.com" && passInput.value == "123456") {
//       alert ('Olá, Tryber!'); 
//     } else {
//       alert ('Login ou senha inválidos.')
//     }
//   }
// });


loginBtn.addEventListener('click', () => {
    if (loginInput.value == "tryber@teste.com" && passInput.value == "123456") {
      alert ('Olá, Tryber!'); 
    } else {
      alert ('Login ou senha inválidos.')
    }
  });