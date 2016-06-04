"use strict";
var assert = require('assert');
var arma = require('../lib/interface/arma');
var armas = require('../lib/armas');

describe("Validando estrutura das Classes base", function() {
	describe("Classe arma", function() {
		var lancha = new arma('lancha',1);

		it('Arma lancha', function() {
			 //console.log(navio);
       assert.equal(1,lancha.quadros);
       assert.equal('lancha',lancha.nome);
		});

		it('Arma Submarino',function(){
			let submarino = new armas.Submarino();
			assert.equal(1,submarino.quadros);
			assert.equal('Submarino',submarino.nome);
		});
		it('Arma Cruzador',function(){
			let cruzador = new armas.Cruzador();
			assert.equal(2,cruzador.quadros);
			assert.equal('Cruzador',cruzador.nome);
		});
		it('Arma Hidroaviao',function(){
			let hidroaviao = new armas.Hidroaviao();
			assert.equal(3,hidroaviao.quadros);
			assert.equal('HidroAvião',hidroaviao.nome);
		});
		it('Arma Couracado',function(){
			let couracado = new armas.Couracado();
			assert.equal(4,couracado.quadros);
			assert.equal('Couraçado',couracado.nome);
		});
		it('Arma PortaAvioes',function(){
			let portaAvioes = new armas.PortaAvioes();
			assert.equal(5,portaAvioes.quadros);
			assert.equal('Porta Aviões',portaAvioes.nome);
		});
	});
});
