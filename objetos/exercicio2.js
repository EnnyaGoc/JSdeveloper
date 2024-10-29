class Pessoa{
    nome;
    peso;
    altura

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaIMC(){
        return this.peso / Math.pow(this.altura, 2);
    }
}


const pessoa = new Pessoa('jose', 70, 1.75);
console.log(pessoa.calculaIMC());

const ana = new Pessoa('ana', 63, 1.65);
console.log(ana.calculaIMC());