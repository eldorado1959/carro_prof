"use strict";
// Pessoa
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, sobrenome, nomeDoPai, nomeDaMae, numeroRG, numeroCPF, dataDeNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeDoPai = nomeDoPai;
        this.nomeDaMae = nomeDaMae;
        this.numeroRG = numeroRG;
        this.numeroCPF = numeroCPF;
        this.dataDeNascimento = dataDeNascimento;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
