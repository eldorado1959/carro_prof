"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Garagem_1 = require("./Garagem");
var leitor = require('readline-sync');
var menu = true;
var garagem = new Garagem_1.Garagem();
while (menu) {
    var pergunta = leitor.questionInt("\n        1 - Adicionar Carro\n        2 - Verificar Garagem\n        3 - Modificar Carro\n        4 - Deletar Carro\n        0 - Sair\n        Resposta: \n    ");
    switch (pergunta) {
        case 1:
            console.log("Iniciando cadastro do Carro:");
            var marcaCarro = leitor.question("Qual a marca do seu carro?").toUpperCase();
            var kmCarro = leitor.questionInt("Quantos kms por litro?");
            var tanqueCarro = leitor.questionInt("Quantos litros de gasolina tem em seu tanque?");
            var carroTemp = new Carro_1.Carro(tanqueCarro, kmCarro, marcaCarro);
            garagem.setGaragem(carroTemp);
            break;
        case 2:
            console.log("Os carros na garagem s\u00E3o:");
            garagem.getGaragem();
            break;
        case 3:
            garagem.modificarCarro();
            break;
        case 4:
            garagem.deletarCarro();
            break;
        case 0:
            console.log("Finalizando sistema.");
            process.exit(0);
    }
}
