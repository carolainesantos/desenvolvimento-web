// Função para calcular o valor a ser pago
function calcularValor() {
  // Obter os valores do tempo de uso e valor por 15 min
  let valorPor15Min = parseFloat(document.getElementById("valorTempo").value);
  let tempoDeUso = parseFloat(document.getElementById("tempoCli").value);

  if (isNaN(valorPor15Min) || isNaN(tempoDeUso)) {
    alert("Por favor, preencha valores válidos.");
    return;
  }

  let valorTotal = Math.ceil(tempoDeUso / 15) * valorPor15Min;

  document.getElementById("valorFinal").innerText =
    "Valor a Pagar R$: " + valorTotal.toFixed(2);
}

document.getElementById("botao").addEventListener("click", calcularValor);
