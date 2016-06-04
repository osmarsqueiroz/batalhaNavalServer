"use strict";

var Arma = require('../interface/arma');

class Cruzador extends Arma{
      constructor(){
          super("Cruzador",2);
      }
};

module.exports.Cruzador = Cruzador;
