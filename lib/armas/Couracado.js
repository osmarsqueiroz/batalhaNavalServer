"use strict";

var Arma = require('../interface/Arma');

class Couracado  extends Arma{
  constructor(){
      super("Couraçado",4);
  }
};

module.exports = Couracado;
