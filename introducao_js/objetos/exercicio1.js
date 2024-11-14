class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
        
    }
    calculaGasto(distancia, preco){
        const qtdcombustivel = this.gastoMedioPorKm * distancia;
        const valorTotal = preco * qtdcombustivel;
        return valorTotal;
    }
}

const carro1 = new Carro('fiat', 'azul', 1/12);

console.log(carro1.calculaGasto(7, 6.5));