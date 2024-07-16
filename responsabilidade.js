"use strict";
// calcIdade
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularIdade = calcularIdade;
exports.verificarResponsabilidade = verificarResponsabilidade;
function calcularIdade(dataDeNascimento) {
    var hoje = new Date();
    var diferencaAnos = hoje.getFullYear() - dataDeNascimento.getFullYear();
    var diferencaMeses = hoje.getMonth() - dataDeNascimento.getMonth();
    var diferencaDias = hoje.getDate() - dataDeNascimento.getDate();
    if (diferencaMeses < 0 || (diferencaMeses === 0 && diferencaDias < 0)) {
        return diferencaAnos - 1;
    }
    return diferencaAnos;
}
function verificarResponsabilidade(pessoa) {
    var idade = calcularIdade(pessoa.dataDeNascimento);
    if (idade < 18) {
        console.log("A pessoa \u00E9 menor de idade. Respons\u00E1veis: Pai - ".concat(pessoa.nomeDoPai, ", M\u00E3e - ").concat(pessoa.nomeDaMae));
    }
    else {
        console.log("A pessoa é maior de idade. Não é necessário responsável.");
    }
}
