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

// setCheckAgreement(): configura o checkbox #agreement para habilitar o botão de submit
function setCheckAgreement() {
  // obtém o seletor do checkbox #agreement e acrescenta o event listener
  document.getElementById('agreement').addEventListener('click', (event) => {
    // obtém o seletor do botão #submit-btn e habilita-o caso o checkbox esteja selecionado
    document.getElementById('submit-btn').disabled = !event.target.checked;
  });
}

// executa as funções ao carregar a página
window.onload = () => {
  // configura os event listeners
  setButtonLoginSubmit();
  setCheckAgreement();
};
