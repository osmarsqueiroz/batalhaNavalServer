"use strict";

var Arma = require('../interface/Arma');

class Cruzador extends Arma{
      constructor(){
          super("Cruzador",2);
      }
};

module.exports = Cruzador;
