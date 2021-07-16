// setButtonLoginSubmit(): configura o botão do form de login
function setButtonLoginSubmit() {
  // obtém o seletor do botão e acrescenta o event listener
  document.getElementById('login-submit').addEventListener('click', () => {
    const loginNome = document.getElementById('login-nome').value;
    const loginSenha = document.getElementById('login-senha').value;
    if (loginNome === 'tryber@teste.com' && loginSenha === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners
  setButtonLoginSubmit();
};
