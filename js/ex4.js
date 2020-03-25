//Calculo do Volume de uma Lata de Óleo
//Lata de Óleo é um Cilindro - Realizaremos o caluculo de um cilindro

let altura = parseInt(prompt("insira a Altura: "));
let diametro = parseInt(prompt("insira o Diametro: "));
let raio = diametro/2
let Volume = Math.PI*(raio^2)*altura
alert("O Volume da Lata de óleo é: "+Volume)
