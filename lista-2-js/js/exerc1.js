function calculo() {
  let titulo = document.querySelector("#inTitulo").value;
  let duracao = Number(document.querySelector("#inDuracao").value);

  let horas = Math.floor(duracao / 60);
  let minutos = duracao % 60;

  // Saida de dados
  let outTitulo = document.querySelector("#outTitulo");
  let outDuracao = document.querySelector("#outDuracao");

  outTitulo.innerText = `Título: ${titulo}`;
  outDuracao.innerText = `Duracao: ${horas} hora(s) e ${minutos} min.`;
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
  calculo();
});
