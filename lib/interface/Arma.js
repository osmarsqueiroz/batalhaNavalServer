"use strict";
var Parte = require('./Parte');

class Arma extends Parte{
  constructor(nome,quadros) {
    super(quadros);
    this.nome = nome;
  };
};
module.exports = Arma;
