"use strict";

var Arma = require('../interface/Arma');

class Hidroaviao extends Arma{
      constructor(){
          super("HidroAvião",3);
      }
};

module.exports = Hidroaviao;
