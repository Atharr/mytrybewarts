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
      button2.disabled = false
    }
  })
}
submitForm()
