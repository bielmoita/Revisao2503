//Nome
var nome = prompt("Insira o nome do Hospede: ");
//Numero de dias no hotel
var estadia = parseInt(
  prompt("Insira quantos dias o Hóspede " + nome + " esteve no hotel")
);

if (estadia > 0 && estadia < 15) {
  var diaria = estadia * 50;
  var taxa = estadia * 4;
  var totalPagar = diaria + taxa;
  alert("O hóspede " + nome + "\nTotal a Pagar R$" + totalPagar);
} else {
  if (estadia > 0 && estadia == 15) {
    var diaria = estadia * 50;
    var taxa = estadia * 3.6;
    var totalPagar = diaria + taxa;
    alert("O hóspede " + nome + "\nTotal a Pagar R$" + totalPagar);
  } else {
    var diaria = estadia * 50;
    var taxa = estadia * 3;
    var totalPagar = diaria + taxa;
    alert("O hóspede " + nome + "\nTotal a Pagar R$" + totalPagar);
  }
}
