const populacaoInfectadaInicialmente = 1_000;
const qtdDeInfectadosPorUmPaciente = 4;
const tempo = 100;
const pessoasInfectadas = populacaoInfectadaInicialmente * qtdDeInfectadosPorUmPaciente ** (100 / 100);

console.log(pessoasInfectadas);