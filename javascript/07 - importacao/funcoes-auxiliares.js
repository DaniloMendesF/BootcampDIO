const entradas = [3, 30, 50, 78, 120, 50, 70, 80, 257];
let i = 0;


function gets(){
    const valor = entradas[i];
    i++;
    return valor;    
}

function print (texto){
    console.log(texto);
}

module.exports = {
    gets,
    print,
    entradas
};