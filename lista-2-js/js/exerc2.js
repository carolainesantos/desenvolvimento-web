document.getElementById("calcular").addEventListener("click", function () {
  calcularFinanciamento();
});

function calcularFinanciamento() {
  let modelo = document.getElementById("modelo").value;
  let preco = parseFloat(document.getElementById("preco").value);

  if (isNaN(preco) || preco <= 0) {
    alert("Por favor, insira um preço válido.");
    return;
  }

  let entrada = preco * 0.5;
  let saldoParcelado = (preco - entrada) / 12;

  let resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "<p><strong>Promoção:</strong> " +
    modelo +
    "</p>" +
    "<p><strong>Entrada de R$:</strong> R$" +
    entrada.toFixed(2) +
    "</p>" +
    "<p><strong>+ 12x de R$:</strong> R$" +
    saldoParcelado.toFixed(2) +
    " por mês</p>";
}
