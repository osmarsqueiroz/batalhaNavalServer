"use strict";

var Arma = require('../interface/arma');

class Hidroaviao extends Arma{
      constructor(){
          super("HidroAvião",3);
      }
};

module.exports.Hidroaviao = Hidroaviao;
