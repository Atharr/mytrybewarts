function submit() {
  const button = document.querySelector('#input-button');

  button.addEventListener('click', () => {
    const email = document.querySelector('#input-email').value;
    const password = document.querySelector('#input-password').value;

    if (email === 'tryber@teste.com' && password === 123456) {
      window.alert('Olá, Tryber!')
    } else {
      window.alert('Login ou senha inválidos.')
    }
  })
}
submit()
