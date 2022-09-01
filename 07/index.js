const populacaoInfectadaInicialmente = 1_000; // Po
const qtdDeInfectadosPorUmPaciente = 4; // x
const tempo = 100;
const pessoasInfectadas = populacaoInfectadaInicialmente * qtdDeInfectadosPorUmPaciente ** (100 / 100);

console.log(pessoasInfectadas);
