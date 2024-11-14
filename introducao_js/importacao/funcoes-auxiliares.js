const entradas = [10, 5, 50, 10, 98, 23, 3, 76, 32, 28, 43];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print };