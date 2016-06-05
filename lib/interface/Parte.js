"use strict";

class Parte {
    constructor(comprimento) {
    this.comprimento = comprimento;
    this.partesDestruidas = comprimento;
  };
  destruirUmaParte(){
    this.partesDestruidas -= 1;
  };
  verificarDestruicao(){
    return this.partesDestruidas === 0;
  };
  partesRestante(){
    return this.partesDestruidas;
  }
};
module.exports = Parte;
