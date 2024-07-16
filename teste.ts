

//  testePessoa
//let readlineSync = require(“readline-sync”)
//import readlineSync from 'readline-sync';

import * as readlineSync from 'readline-sync';
import { Pessoa } from './Pessoa';
import { verificarResponsabilidade } from './responsabilidade';

const nome = readlineSync.question('Digite o seu nome: ');
const sobrenome = readlineSync.question('Digite o seu sobrenome: ');
const nomeDoPai = readlineSync.question('Digite o nome do seu pai: ');
const nomeDaMae = readlineSync.question('Digite o nome da sua mãe: ');
const numeroRG = readlineSync.question('Digite o seu RG: ');
const numeroCPF = readlineSync.question('Digite o seu CPF: ');
const dataDeNascimentoInput = readlineSync.question('Digite a sua data de nascimento (YYYY-MM-DD): ');

const dataDeNascimento = new Date(dataDeNascimentoInput);

const pessoa = new Pessoa(
    nome,
    sobrenome,
    nomeDoPai,
    nomeDaMae,
    numeroRG,
    numeroCPF,
    dataDeNascimento
);

console.log('Dados da pessoa:');
console.log(pessoa);

verificarResponsabilidade(pessoa);
