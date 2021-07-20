function submitLogin() {
  const button = document.querySelector('#input-button');

  button.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#input-password').value;

    if (email === 'tryber@teste.com' && password === '123456') {
      window.alert('Olá, Tryber!')
    } else {
      window.alert('Login ou senha inválidos.')
    }
  })
}
submitLogin()

function submitForm() {
  const button2 = document.querySelector('#submit-btn')
  const checkBox = document.querySelector('#agreement')

  checkBox.addEventListener('click', (event) => {
    if (checkBox.checked) {
      button2.disabled = false;
    }
    else {
      button2.disabled = true;
    }
  })
}
submitForm()

function counterCharacters() {
  const counter = document.querySelector('#counter')
  const textarea = document.querySelector('#textarea')

  textarea.addEventListener('input', (event) => {
    const remaining = textarea.maxLength - textarea.value.length

    counter.innerHTML = `${remaining} caracteres restantes.`
  })
}
counterCharacters()
