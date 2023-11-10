// Seleciona o paragrafo pelo seu ID
let paragrafo = document.querySelector("#myParagraph");
// Adicionar um ouvinte de eventos pra quando passar o mouse
paragrafo.addEventListener("mouseover", function () {
  paragrafo.classList.add("hover");
});

// Adiciona um ouvinte de eventos para quando tirar o mouse
paragrafo.addEventListener("mouseout", function () {
  paragrafo.classList.remove("hover");
});

function mostrarOla() {
  let inputNome = document.querySelector("#nome").value;
  document.querySelector("#mensagem").textContent = "Olá " + inputNome;
}

function mostrarOla2() {
  let inputNome = document.querySelector("#nome").value;
  document.querySelector("#mensagem2").textContent = "Olá 2 " + inputNome;
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
  mostrarOla2();
});
