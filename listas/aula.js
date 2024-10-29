const alunos = ['ana', 'julia', 'marcelo'];

console.log(alunos);

console.log(alunos[0]);

alunos.push('vitor');
console.log(alunos);

alunos[0] = 'pedro';

console.log(alunos);

const numeros = [1, 2, 3, 4];
console.log(numeros);
console.log(numeros.pop());
console.log(numeros);
console.log(numeros.shift());
console.log(numeros);

const nome = 'ana silva oliveira';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
    
} 

const notas = [];
notas.push(1);
notas.push(5);
notas.push(7);
notas.push(5);
notas.push(7);

console.log(notas.length);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
     soma = soma + notas[i];
    
}
let media = soma / notas.length;
console.log(media);




