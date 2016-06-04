"use strict";

var Arma = require('../interface/arma');

class Couracado  extends Arma{
  constructor(){
      super("Couraçado",4);
  }
};


module.exports.Couracado = Couracado;
