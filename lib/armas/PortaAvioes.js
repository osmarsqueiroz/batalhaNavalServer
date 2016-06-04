"use strict";

var Arma = require('../interface/arma');

class PortaAvioes  extends Arma{
  constructor(){
      super("Porta Aviões",5);
  }
};


module.exports.PortaAvioes = PortaAvioes;
