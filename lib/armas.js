"use strict";
var Arma = require('./interface/arma');

class Hidroaviao extends Arma{
      constructor(){
          super("HidroAvião",3);
      }
};

class Submarino extends Arma{
      constructor(){
          super("Submarino",1);
      }
};

class Cruzador extends Arma{
      constructor(){
          super("Cruzador",2);
      }
};

class Couracado  extends Arma{
  constructor(){
      super("Couraçado",4);
  }
};

class PortaAvioes  extends Arma{
  constructor(){
      super("Porta Aviões",5);
  }
};

module.exports.Hidroaviao = Hidroaviao;
module.exports.Submarino = Submarino;
module.exports.Cruzador = Cruzador;
module.exports.Couracado = Couracado;
module.exports.PortaAvioes = PortaAvioes;
