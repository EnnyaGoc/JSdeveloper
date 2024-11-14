function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}



function main() {
    console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 20));
console.log(incrementarJuros(100, 15));
}

main();