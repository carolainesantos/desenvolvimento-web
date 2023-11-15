document.getElementById("botao").onclick = function () {
  let precoPorKg = parseFloat(document.getElementById("Preco").value);
  let consumoEmGramas = parseFloat(document.getElementById("Consumo").value);

  let valorAPagar = (consumoEmGramas / 1000) * precoPorKg;

  document.getElementById("valorFinal").innerHTML =
    "Valor a Pagar: R$ " + valorAPagar.toFixed(2);
};
