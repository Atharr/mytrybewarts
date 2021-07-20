const obj = {
  submitLogin: document.getElementById('submit'),
  submitForm: document.getElementById('submit-btn'),
  agreement: document.getElementById('agreement'),
};

// Requisito 3
obj.submitLogin.addEventListener('click', (event) => {
  event.preventDefault();
  const inputLogin = document.getElementById('login').value;
  const inputPassword = document.getElementById('password').value;
  if (inputLogin === 'tryber@teste.com' && inputPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});

// Requisito 18
obj.agreement.addEventListener('change', () => {
  obj.submitForm.removeAttribute('disabled');
});

// Método removeAttribute(): Remove um atributo HTML.
// Pode ser encontrado em: https://www.w3schools.com/jsref/met_element_removeattribute.asp
