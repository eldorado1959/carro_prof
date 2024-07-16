"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var leitor = require('readline-sync');
var Carro = /** @class */ (function () {
    function Carro(tanqueCarro, kmCarro, marcaCarro) {
        this.tanque = tanqueCarro;
        this.km = kmCarro;
        this.marca = marcaCarro;
    }
    //visualiza todas as infos do carro:
    Carro.prototype.getCarro = function () {
        console.log("Marca do Carro: ".concat(this.marca, ", Km/L: ").concat(this.km, ", Tanque de Gasolina: ").concat(this.tanque, " L"));
    };
    //aqui atualiza as infos do carro:
    Carro.prototype.setCarro = function () {
        var marcaCarro = leitor.question("Insira a marca do carro: ").toUpperCase();
        var kmCarro = leitor.question("Insira a km/L: ");
        var tanqueCarro = leitor.questionInt("Insira a quantidade de gasolina que tem no tanque: ");
        if (marcaCarro == "") {
            this.marca = this.marca;
        }
        else {
            this.tanque = tanqueCarro;
        }
        if (kmCarro == null) {
            this.km = this.km;
        }
        else {
            this.km = kmCarro;
        }
        if (tanqueCarro == null) {
            this.tanque = this.tanque;
        }
        else {
            this.marca = marcaCarro;
        }
    };
    //no método andar é feito o cálculo para verificar a quantidade de gasolina gasta no percurso do carro
    Carro.prototype.andar = function () {
        var distancia = leitor.questionInt("Insira a distância a ser percorrida pelo veículo (em kms): ");
        //tanque - (distancia / km/l)
        var combustivelGasto = (distancia / this.km);
        if (combustivelGasto > this.tanque) {
            console.log("A viagem n\u00E3o foi realizada, voc\u00EA s\u00F3 tem ".concat(this.tanque, " L no carro"));
        }
        else {
            //this.tanque = this.tanque - combustivelGasto
            this.tanque -= combustivelGasto;
            console.log("Voc\u00EA viajou e est\u00E1 com ".concat(this.tanque, "L de gasolina no tanque"));
        }
    };
    Carro.prototype.obterGasolina = function () {
        return this.tanque;
    };
    Carro.prototype.addGasolina = function () {
        var frentista = leitor.questionInt("Quanto vai abastecer hoje, chefia? ");
        this.tanque += frentista;
        console.log("Voc\u00EA est\u00E1 com ".concat(this.obterGasolina(), "L"));
    };
    return Carro;
}());
exports.Carro = Carro;
