"use strict";

var Arma = require('../interface/Arma');

class PortaAvioes  extends Arma{
  constructor(){
      super("Porta Aviões",5);
  }
};


module.exports = PortaAvioes;
