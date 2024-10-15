function escreverMeuNome(nome) {
    return nome;
    
}


function verificaIdade(idade) {
    if (idade >= 18) {
        console.log(escreverMeuNome('ennya') + ' maior de idade');
    } else {
        console.log('menor de idade');
        
    }
    
}

verificaIdade(18);