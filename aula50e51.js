/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);
console.log(resto);
*/

const pessoa = {
    nome: 'Celito',
    sobrenome: 'Kraemer',
    idade: 33,
    endereco: {
        rua: 'Av Ipiranga',
        numero: 01,
    }
};

//const nome = pessoa.nome;

const {nome, sobrenome, endereco, endereco:{rua, numero}, ...resto} = pessoa;
console.log(nome, sobrenome, endereco, rua, numero, resto);


