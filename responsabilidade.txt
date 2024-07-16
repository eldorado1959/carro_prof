

// calcIdade

import { Pessoa } from './Pessoa';

function calcularIdade(dataDeNascimento: Date): number {
    const hoje = new Date();
    const diferencaAnos = hoje.getFullYear() - dataDeNascimento.getFullYear();
    const diferencaMeses = hoje.getMonth() - dataDeNascimento.getMonth();
    const diferencaDias = hoje.getDate() - dataDeNascimento.getDate();
    if (diferencaMeses < 0 || (diferencaMeses === 0 && diferencaDias < 0)) {
        return diferencaAnos - 1;
    }
    return diferencaAnos;
}

function verificarResponsabilidade(pessoa: Pessoa): void {
    const idade = calcularIdade(pessoa.dataDeNascimento);
    if (idade < 18) {
        console.log(`A pessoa é menor de idade. Responsáveis: Pai - ${pessoa.nomeDoPai}, Mãe - ${pessoa.nomeDaMae}`);
    } else {
        console.log("A pessoa é maior de idade. Não é necessário responsável.");
    }
}

export { calcularIdade, verificarResponsabilidade };
