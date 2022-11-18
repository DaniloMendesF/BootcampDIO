

const notas = [];
let soma = 0;

notas.push(2);
notas.push(10);
notas.push(7);


for (let i = 0; i < notas.length; i++){
    soma = soma + notas[i];
}

const media = soma / notas.length;
console.log(media);