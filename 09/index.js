// valor de angulo (a)  = soma dos angulos (S)/ numero de lados (n)
// soma de angulos (S) = (numero de lados (n) - 2) * 180
// poligono de 06 lados com angulos de 120° garus

const numeroDelados = 6;
const somaDeAngulos = (numeroDelados - 2) * 180;
const valorDoAngulo = somaDeAngulos / numeroDelados;

console.log(`O valor da soma de angulos é ${somaDeAngulos} graus e o valor de cada angulo é ${valorDoAngulo}`);