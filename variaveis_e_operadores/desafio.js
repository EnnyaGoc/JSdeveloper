const precoCombustivel = 5.79;
const kmPorLitros = 12;
let distanciaEmKm = 1580;

let litrosConsumidos = distanciaEmKm / kmPorLitros;
let valorGasto = precoCombustivel * litrosConsumidos;

console.log("O valor total gasto para essa viagem é de: "+ valorGasto.toFixed(2));