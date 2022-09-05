const montante = 90_000;
const capital = 60_000;
const numeroDeMeses = 24;

const taxaDeJuros = ((montante / capital) ** (1 / 24)) - 1;

const jurosEmPercent = taxaDeJuros * 100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${jurosEmPercent} %, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais`);