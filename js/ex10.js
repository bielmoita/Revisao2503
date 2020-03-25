let sexo = new Array(100);
let corOlhos = new Array(100);
let corCabelo = new Array(100);
let idade = new Array(100);
//Quantidade Mulheres entre 18 e 35 anos
let idadeF = 0;
//Quantidade de Olhos castanhos e Cabelos Pretos
let qtdOcCp = 0;

for (let i=0; i<100; i++)
{
    sexo[i] = prompt("Sexo Masculino (M) ou Feminino (F): ");
    corOlhos[i] = prompt("Cor dos olhos Azuis(A) , Verdes (V), castanhos(C): ");
    corCabelo[i] = prompt("Cor do cabelo Louros(L), Castanhos(C), Pretos(P): ");
    idade[i] = prompt("Idade: ");
}

let maiorIdade = Math.max.apply(null, idade);
let menorIdade = Math.min.apply(null, idade);
console.log("Maior idade: "+maiorIdade+ " Menor idade: "+menorIdade);

for(let i=0; i<100; i++)
{
    if((idade[i] >= 18 && idade[i] <= 35) &&(sexo[i] == "feminino" || sexo[i] =="F"))
    {
        idadeF = idadeF+1
    }
    if((corOlhos[i] == "castanhos" || corOlhos[i] == "C") && (corCabelo[i] == "pretos" || corCabelo[i] == "P"))
    {
        qtdOcCp = qtdOcCp+1
    }

}
console.log("Quantidade de Individuos com olhos castanhos e cabelos pretos é: "+ qtdOcCp);