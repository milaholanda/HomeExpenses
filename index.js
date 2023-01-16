console.log("Olá, triste ser pobre, não é? Vou te ajudar a calcular seus custos esse mês. Primeiro, quantas fontes de renda você tem?");

var numRendas = prompt("");
var Rendas = [];

for (i = 0; i < numRendas; i++) {
  Rendas.push(prompt("E qual a sua fonte de renda n.º" + (i+1)));
}

console.log("ok, então suas fontes de renda são: " + Rendas);
console.log("Agora vou precisar saber quanto você ganha com cada um deles okay?");

var valorRendas = [];
for (i = 0; i < numRendas; i++) {
  valorRendas.push(prompt("Quanto você ganha com "+ Rendas[i]));
}

console.log("Então você ganha:");
for (i = 0; i < numRendas; i++) {
  console.log("R$"+valorRendas[i]+" com "+Rendas[i]);
}

function soma(arrNum) {
  var soma = 0;
  for (var element of arrNum) {
    soma += Number(element);
  }
  return soma;
}

console.log("Totalizando R$"+ soma(valorRendas));
console.log("ok, agora vou precisar saber dos seus custos de casa. Vá digitando o título dos seus custos até que você não se lembre mais de nenhum! Quando você tiver acabado, digite ACABOU");

var custos = [prompt("")];

while (custos.includes("acabou"||"ACABOU") == false ){
  custos.push(prompt(""));
}
custos.pop();
console.log("Então seus custos são: " + custos);
console.log("Agora vou precisar saber quanto você vai gastar em cada um desses, ok?");

var valorCustos = [];

for (i = 0; i < custos.length; i++) {
  valorCustos.push(prompt("Quanto você vai gastar com "+custos[i]+"?"));
}

console.log("Então você gastará R$"+soma(valorCustos));

function sub(Renda, Custos) {
  var sobras = Renda - Custos;
  return sobras;
}

console.log("Ficando, no fim, com apenas R$"+sub(soma(valorRendas),soma(valorCustos))+ ". Triste ser pobre né?");