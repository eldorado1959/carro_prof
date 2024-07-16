

// Pessoa

class Pessoa {
    nome: string;
    sobrenome: string;
    nomeDoPai: string;
    nomeDaMae: string;
    numeroRG: string;
    numeroCPF: string;
    dataDeNascimento: Date;

    constructor(
        nome: string,
        sobrenome: string,
        nomeDoPai: string,
        nomeDaMae: string,
        numeroRG: string,
        numeroCPF: string,
        dataDeNascimento: Date
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nomeDoPai = nomeDoPai;
        this.nomeDaMae = nomeDaMae;
        this.numeroRG = numeroRG;
        this.numeroCPF = numeroCPF;
        this.dataDeNascimento = dataDeNascimento;
    }
}

export { Pessoa };
