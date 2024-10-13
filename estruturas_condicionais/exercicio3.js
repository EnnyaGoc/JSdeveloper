const precoNormal = 120;
const condicaoPagamento = 3;

let valor;

if (condicaoPagamento === 1) {
    valor = precoNormal - precoNormal * 0.1;
} else if (condicaoPagamento === 2) {
     valor = precoNormal - precoNormal * 0.15;
} else if (condicaoPagamento === 3) {
     valor = precoNormal;
} else{
     valor = precoNormal + precoNormal * 0.1;
}

console.log(valor);