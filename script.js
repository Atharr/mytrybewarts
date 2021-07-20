document.getElementById('button').addEventListener('click', (event) => {
  const t = document.getElementById('login').value === 'tryber@teste.com';
  const s = document.getElementById('senha').value === '123456';
  event.preventDefault();
  if (t && s) {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
