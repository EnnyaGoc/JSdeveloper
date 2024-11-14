

function aplicaDesconto(desconto, precoNormal) {
    return precoNormal - (precoNormal * (desconto/100));
}

function aplicaJuros(juros, precoNormal) {
    return precoNormal + (precoNormal * (juros/100));
}

function main() {
const precoNormal = 120;
const condicaoPagamento = 2;

let valor;

if (condicaoPagamento === 1) {
    valor = aplicaDesconto(10, precoNormal);
} else if (condicaoPagamento === 2) {
    valor = aplicaDesconto(15, precoNormal);
} else if (condicaoPagamento === 3) {
     valor = precoNormal;
} else{
     valor = aplicaJuros(10, precoNormal);
}  
console.log(valor);
}

main();