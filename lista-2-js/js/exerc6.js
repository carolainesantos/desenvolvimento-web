// Função para calcular o valor do desconto e exibir a mensagem
function calcularPromocao() {
  // Obter os valores do produto e preço do HTML
  var nomeProduto = document.getElementById("produto").value;
  var precoProduto = parseFloat(document.getElementById("preco").value);

  // Validar se os campos foram preenchidos corretamente
  if (nomeProduto === "" || isNaN(precoProduto)) {
    alert("Por favor, preencha valores válidos.");
    return;
  }

  // Verificar se o preço é válido (positivo)
  if (precoProduto <= 0) {
    alert("O preço do produto deve ser um valor positivo.");
    return;
  }

  var qtdUnidades = 2;
  var valorDesconto = 0.5;

  // Calcular o preço do terceiro item com desconto
  var precoTerceiroItem = precoProduto * valorDesconto;

  // Calcular o valor total dos três itens com desconto
  var valorTotalComDesconto = precoTerceiroItem + precoProduto * qtdUnidades;

  // Exibir a mensagem na página HTML
  let mensagem =
    nomeProduto +
    " - Promoção: Leve 3 por R$: " +
    valorTotalComDesconto.toFixed(2);
  mensagem +=
    "\n\n O 3º produto custa apenas R$: " + precoTerceiroItem.toFixed(2);

  document.getElementById("valorFinal").innerText = mensagem;
}

// Adicionar um event listener para o botão
document.getElementById("botao").addEventListener("click", calcularPromocao);
