const precoEtanol = 3.79;
const precoGasolina = 5.79;
const tipoCombustivel = 'etanol';
const kmPorLitros = 10;
let distanciaEmKm = 100;

let litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'gasolina') { 
    let valorGasto = precoGasolina * litrosConsumidos;
    console.log("O valor total gasto para essa viagem é de: "+ valorGasto.toFixed(2));
} else {
    let valorGasto = precoEtanol * litrosConsumidos;
    console.log("O valor total gasto para essa viagem é de: "+ valorGasto.toFixed(2));
}



