function addEvent() {
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
}
function addEvent1() {
  document.getElementById("comentario").addEventListener('input', () => {
    let b = 500 - document.getElementById("comentario").value.length
    if (b >= 0) {
      document.getElementById("counter").innerText = b
    }
  })
}

window.onload = () => {
  addEvent()
  addEvent1()
}

