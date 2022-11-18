// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número encontrado e verifica se ele é par;

function verificarPar(numero){
    if (numero % 2 === 0){
        return ' é par!'
    } else {
        return ' é ímpar!'
    }
}

const numeros = [];

numeros.push(2);
numeros.push(5);
numeros.push(25);
numeros.push(7);
numeros.push(10);


for (let i=0; i<numeros.length; i++){
    console.log('Elemeto ' + (i+1) + ': ' + numeros[i] + verificarPar(numeros[i])); 
}