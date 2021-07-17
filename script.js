const btnLogin = document.querySelector('#btn-login');

function validaLogin() {
  const loginValue = document.getElementById('login').value;
  const passValue = document.getElementById('password').value
  const login = 'tryber@teste.com'
  const password = '123456'
  let validLogin = false
  console.log(loginValue);
  console.log(passValue);
  if (loginValue == login & passValue == password) {
    alert('Olá, Tryber!')
  } else {
    alert('Login ou senha inválidos.')
  }
}
btnLogin.addEventListener('click', validaLogin)