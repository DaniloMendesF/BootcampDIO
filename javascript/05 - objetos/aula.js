// Criando Objetos 
class pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
}

const danilo = new pessoa('danilo', 28);
const matheus = new pessoa('matheus', 27);

danilo.descrever();
matheus.descrever();

console.log(danilo);


// const pessoa = {
//     nome: 'Danilo M Ferreira',
//     idade: 28,

//     descrever: function(){
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };

// pessoa.nome = 'Matheus';
// pessoa.idade = '27';
// pessoa.descrever();

// const atributo = 'idade';

// pessoa['nome'] = 'teste';
