"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
var leitor = require('readline-sync');
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.carros = [];
    }
    Garagem.prototype.getGaragem = function () {
        for (var i = 0; i < this.carros.length; i++) {
            console.log("".concat(this.carros[i].marca));
        }
    };
    Garagem.prototype.setGaragem = function (carro) {
        if (this.carros.length >= 10) {
            console.log("Voc\u00EA n\u00E3o pode mais estacionar carros nessa garagem.");
        }
        else {
            this.carros.push(carro);
            console.log("Cadastro do ".concat(carro.marca, " concluido com sucesso"));
            console.log("Voc\u00EA tem ".concat(this.carros.length, " carros na garagem."));
        }
    };
    Garagem.prototype.modificarCarro = function () {
        for (var i = 0; i < this.carros.length; i++) {
            console.log("".concat(i, " - ").concat(this.carros[i].marca));
        }
        var numeroModificar = leitor.question("Escreva o número do carro que gostaria de modificar: ");
        console.log("Iniciando a modifica\u00E7\u00E3o do ".concat(this.carros[numeroModificar].marca));
        var marcaModificar = leitor.question("Modelo: ").toUpperCase();
        var kmModificar = leitor.questionInt("KM/L: ");
        var tanqueModificar = leitor.questionInt("Tanque de Gasolina: ");
        this.carros[numeroModificar].marca = marcaModificar;
        this.carros[numeroModificar].km = kmModificar;
        this.carros[numeroModificar].tanque = tanqueModificar;
        console.log("O carro ficou: ".concat(this.carros[numeroModificar].marca));
    };
    //esse método recebe o valor do modelo e deleta o carro escolhido
    Garagem.prototype.deletarCarro = function () {
        for (var i = 0; i < this.carros.length; i++) {
            console.log("Carro ".concat(i, ": ").concat(this.carros[i].marca));
        }
        var marcaDeletar = leitor.question("Escreva a marca do carro que gostaria de deletar: ");
        this.carros = this.carros.filter(function (carro) { return carro.marca !== marcaDeletar; });
        console.log("Ap\u00F3s a modifica\u00E7\u00E3o, esses s\u00E3o os carros na garagem:\n                ".concat(this.carros));
    };
    return Garagem;
}());
exports.Garagem = Garagem;
