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
  document.getElementById('textarea').addEventListener('input', () => {
    const b = 500 - document.getElementById('textarea').value.length;
    if (b >= 0) {
      document.getElementById('counter').innerText = b;
    }
  });
}

function addEvent2() {
  document.getElementById('agreement').addEventListener('click', () => {
    if (document.getElementById('agreement').checked) {
      document.getElementById('submit-btn').disabled = false;
    } else document.getElementById('submit-btn').disabled = true;
  });
}

window.onload = () => {
  addEvent();
  addEvent1();
  addEvent2();
};
