function calcularPromocao() {
  let descricao = document.querySelector("#remedio").value;
  let preco = parseFloat(document.querySelector("#valor").value);

  // Verifica se o cliente comprou duas unidades
  let precoTotal = preco * 2;

  let precoPromocional = Math.floor(precoTotal);

  document.querySelector(
    "#valorFinal"
  ).innerText = `Promoção de ${descricao}\nLeve 2 por apenas R$:  ${precoPromocional.toFixed(
    2
  )}`;
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
  calcularPromocao();
});
