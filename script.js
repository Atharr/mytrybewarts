function btnLogin() {
  document.getElementById("login").addEventListener("click", () => {

    const nomeDeUsuario = document.getElementById("nomeDeUsuario").value;
    const senhaDeUsuario = document.getElementById("senhaDeUsuario").value;

    if (senhaDeUsuario === "123456" && nomeDeUsuario === "tryber@teste.com") {
      alert("Olá, Tryber!");
    } else {
      alert("Login ou senha inválidos.");
    }
  });
}
//https://www.horadecodar.com.br/2020/07/28/como-verificar-se-um-checkbox-esta-checado-c-javascript-ou-jquery/
function desabilitaBtn() {
  let btn = document.getElementById("submit-btn")
  btn.setAttribute("disabled", "disabled")
}

function habilitaBtn() {
  document.getElementById("agreement").addEventListener("click", () => {
    let checkObrigatorio = document.getElementById("agreement")
    if (checkObrigatorio.checked) {
      let estadoBtn = document.getElementById("submit-btn")
      estadoBtn.removeAttribute("disabled", "disabled");
    } else {
      desabilitaBtn();
    }

  });
}

window.onload = () => {
  btnLogin();
  desabilitaBtn();
  habilitaBtn();
}
