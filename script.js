const logIn = document.querySelector('#log-button');
const email = document.querySelector('[name = log-in-email]');
const password = document.querySelector('[name = log-in-password');
const agreement = document.querySelector('#agreement');
const submit = document.querySelector('#submit-btn');

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
  checkSubmit: function submiter(event) {
    if (event.target.checked === true) {
      submit.disabled = false;
    }
    if (event.target.checked === false) {
      submit.disabled = true;
    }
  },
};

// Desabilita o default
// Event Listeners

logIn.addEventListener('click', allF.checkLog);
agreement.addEventListener('click', allF.checkSubmit);
