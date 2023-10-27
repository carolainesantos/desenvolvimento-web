const carro = {
  tipo: "Fiat",
  modelo: "500",
  cor: "branco",
  buzinar() {
    return "Biiiiii !!!";
  },
};

const carro2 = {
  tipo: "Wollkswagen",
  modelo: "fox",
  cor: "amarelo",
};
// console.log(carro, carro2);
// console.log(carro.modelo);
carro.modelo = "Fusca"; // pra alterar
console.log(carro["modelo"]);
console.log(carro.buzinar());

const carro3 = new Object();
carro3.modelo = "Fox";
carro3.cor = "azul";
carro3.tipo = "yyy";
carro3.ano = 98;
console.log(carro3);
