/*
    Criar uma classe para representar os carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilômetro rodado.
    Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor 
    gasto em reais para realizar este percuso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularValorGasto(distancia, precoCombustivel){
        return distancia * precoCombustivel / this.gastoMedioPorKm ;
    }

    descreverCaracteristicas(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Consumo médio por Km: ${this.gastoMedioPorKm} Km/l`);
    }
}

const uno = new Carro('Fiat', 'Vermelho', 12);
const tracker = new Carro('Tracker', 'Preto', 9);

uno.descreverCaracteristicas();
console.log('Valor total: R$' + uno.calcularValorGasto(70, 5).toFixed(2) + '\n');

tracker.descreverCaracteristicas();
console.log('Valor total: R$' + tracker.calcularValorGasto(70, 5).toFixed(2) + '\n');


