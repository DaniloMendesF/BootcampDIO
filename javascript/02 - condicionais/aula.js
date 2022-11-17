//Teste número par

// const numero = 0;

// const isNumeroPar = (numero % 2) === 0;

// if(numero === 0){

//     console.log("Número igual a 0!!")

// }else if(numero % 2 === 0){

//     console.log("Deu certo bocó!!!");

// }else{

//     console.log("Deu errado bocó!!!")

// }

// Desafio Consumo

const kmPorLitros = 10;
const precoEtanol = 5.79;
const precoGasolina = 6.76;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';
let preco;

if (tipoCombustivel === 'Etanol') {

    preco = distanciaEmKm * precoEtanol / kmPorLitros;

} else {

    preco = distanciaEmKm * precoGasolina / kmPorLitros;
}


console.log(preco.toFixed(2));
