/* const pessoa = {
    nome: "Ana Silva",
    idade: 34,
    descrever: function () {

        console.log(`Meu nome é ${this.nome} e minha idade ${this.idade}`);
    }
};

pessoa.descrever();

pessoa.nome = "julio";
pessoa.idade = 43;
pessoa.descrever();

pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa['nome'] = 'teste';
pessoa.nome = 'teste';

*/

class Pessoa{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function comparaPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) do que ${p2.nome}`);
    }
    else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) do que ${p1.nome}`);
    }
    else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('vitor', 21);
const ana = new Pessoa('ana', 21);

comparaPessoas(vitor, ana);