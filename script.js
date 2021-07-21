function submitLogin() {
  const button = document.querySelector('#input-button');

  button.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#input-password').value;

    if (email === 'tryber@teste.com' && password === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}
submitLogin();

function submitForm() {
  const button2 = document.querySelector('#submit-btn');
  const checkBox = document.querySelector('#agreement');

  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      button2.disabled = false;
    }
  });
}
submitForm();

const textArea = document.getElementById('textearea');

textArea.addEventListener('keyup', () => {
  const cont = document.querySelector('#counter');
  const valormaximo = document.querySelector('#textarea').maxLength;
  const valorAtual = textArea.value.length;
  const diminuir = valormaximo - valorAtual;
  cont.innerHTML = diminuir;
});
