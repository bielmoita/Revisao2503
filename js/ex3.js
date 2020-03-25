
//HT Horas Trabalhadas
let HT = parseFloat(prompt("Insira o valor de Horas Trabalhadas: "))

//VH - Valor da Hora trabalhada
let VH = parseFloat(prompt("Insira o Valor da Hora Trabalhada: "));

//PD - Percentual de desconto
let PD = parseInt(prompt("insira um percentual de desconto: "));

//SB - Salario bruto
let SB = HT*VH;

//TD - Total de desconto
let TD = (PD/100)*SB;

//SL - Salario liquido
let SL = SB-TD;

alert("As Horas trabalhadas são: "+HT+
        "\nO salario bruto é: "+SB+
        "\nO desconto é de: "+TD+"%"+
        "\nO Salario liquido é: "+SL)