//informar salario bruto
let SB = parseFloat(prompt("Insira seu salario bruto: "));
//prev - Desconto Previdencia
let prev = SB*(10/100)

let novoSB = SB-prev;

//Desconto de 5% de outro desconto
let desc = novoSB*(5/100)
let liquido = novoSB-desc
alert("Seu salario liquido vai ser de: R$"+liquido)