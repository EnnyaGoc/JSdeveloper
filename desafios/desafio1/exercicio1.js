const {gets, print} = require('./funcoes_auxiliares_ex1');

const media = gets();

if (media >= 7) {
    print("Aprovado");
    
}else{
    if (media >=5 && media< 7) {
        print("Recuperação");
        
    }
    else{
        print("Reprovado");
    }
}