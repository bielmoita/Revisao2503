//Carro faz 12KM por litro de combustivel
//Distancia = TEMPO * VELOCIDADE
//LITROS_USADOS = DISTANCIA / 12
//O programa deve apresentar os valores da velocidade média, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.

let tempo = parseInt(prompt("Quantas horas levou a viagem: "));
let velocidade = parseInt(prompt("Qual a velocidade mantida? "));
let distancia = tempo*velocidade;
let litros = distancia/12;
alert("A Velocidade média apresentada é: "+velocidade+"Km/h"+
        "\nO Tempo gasto na viagem foi de: "+tempo+" horas"+
        "\nA distancia percorrida foi de: "+distancia+" KMs"+
        "\nO automovel usou "+litros+" litros de combustivel.")