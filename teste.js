"use strict";
//  testePessoa
//let readlineSync = require(“readline-sync”)
//import readlineSync from 'readline-sync';
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Pessoa_1 = require("./Pessoa");
var responsabilidade_1 = require("./responsabilidade");
var nome = readlineSync.question('Digite o seu nome: ');
var sobrenome = readlineSync.question('Digite o seu sobrenome: ');
var nomeDoPai = readlineSync.question('Digite o nome do seu pai: ');
var nomeDaMae = readlineSync.question('Digite o nome da sua mãe: ');
var numeroRG = readlineSync.question('Digite o seu RG: ');
var numeroCPF = readlineSync.question('Digite o seu CPF: ');
var dataDeNascimentoInput = readlineSync.question('Digite a sua data de nascimento (YYYY-MM-DD): ');
var dataDeNascimento = new Date(dataDeNascimentoInput);
var pessoa = new Pessoa_1.Pessoa(nome, sobrenome, nomeDoPai, nomeDaMae, numeroRG, numeroCPF, dataDeNascimento);
console.log('Dados da pessoa:');
console.log(pessoa);
(0, responsabilidade_1.verificarResponsabilidade)(pessoa);
