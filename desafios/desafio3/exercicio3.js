const {gets, print} = require('./funcoes_auxiliares_ex3');


const salarioBruto = gets();
const beneficios = gets();
let salario;


function calculaSalario(salarioBruto, desconto) {
   return salarioBruto - (salarioBruto * desconto); 
}

if (salarioBruto <= 1100) {
    salario = calculaSalario(salarioBruto, 0.05);
} else if(salarioBruto > 1100 && salarioBruto <= 2500){
    salario = calculaSalario(salarioBruto, 0.1);
    } else {
        salario = calculaSalario(salarioBruto, 0.15);
    }

salario = salario + beneficios;

print(salario);