function calcularDuracao() {
  var titulo = document.getElementById("titulo").value;
  var duracaoEmMinutos = parseFloat(document.getElementById("duracao").value);

  var horas = Math.floor(duracaoEmMinutos / 60);
  var minutos = duracaoEmMinutos % 60;

  var resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "<p><strong>Título do Filme:</strong> " +
    titulo +
    "</p>" +
    "<p><strong>Duração:</strong> " +
    horas +
    " horas e " +
    minutos +
    " minutos</p>";
}
