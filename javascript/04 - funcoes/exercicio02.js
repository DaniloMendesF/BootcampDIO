function aplicarTaxa(valor, taxa){
    return valor * taxa;
}

function calcularValorParcela(valorTotal, numeroParcelas){
    return valorTotal / numeroParcelas;
}


(function(){

const precoEtiqueta = 100;
const formaDePagamento = 4;
const quantidadeParcelas = 4;
let precoParcela
let precoFinal;

if(formaDePagamento == 1){
    aplicarTaxa(precoEtiqueta, 0.9);
    console.log("Preço do produto: R$ ",precoFinal.toFixed(2));

} else if(formaDePagamento == 2){
    aplicarTaxa(precoEtiqueta, 0.9);
    console.log("Preço do produto: R$ ",precoFinal.toFixed(2));

} else if (formaDePagamento == 3){
    precoFinal = precoEtiqueta;
    precoParcela = calcularValorParcela(precoFinal, 2);
    console.log("Quantidade de parcelas: 2")
    console.log("Preço da parcela: R$ ",precoParcela.toFixed(2));
    console.log("Preço d produto: R$ ",precoFinal.toFixed(2));

} else if (formaDePagamento == 4){

    precoFinal = aplicarTaxa(precoEtiqueta, 1.1);
    precoParcela = calcularValorParcela(precoFinal, quantidadeParcelas);

    console.log("Quantidade de parcelas: ", quantidadeParcelas)
    console.log("Preço da parcela: R$ ",precoParcela.toFixed(2));
    console.log("Preço d produto: R$ ",precoFinal.toFixed(2));

} else{
    console.log("Forma de pagamento incorreta!")
}


})();


