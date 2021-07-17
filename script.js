const logIn = document.querySelector('#log-button');
const email = document.querySelector('[name = log-in-email]');
const password = document.querySelector('[name = log-in-password');

// Funções
const allF = {
  checkLog: function checker(event) {
    event.preventDefault();
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Login ou senha inválidos.');
    }
  },
};

// Desabilita o default
// Event Listeners

logIn.addEventListener('click', allF.checkLog);
