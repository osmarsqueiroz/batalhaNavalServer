"use strict";

var Arma = require('../interface/arma');

class Submarino extends Arma{
      constructor(){
          super("Submarino",1);
      }
};


module.exports.Submarino = Submarino;
