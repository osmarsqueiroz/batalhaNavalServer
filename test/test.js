"use strict";
var assert = require('assert');
var Arma = require('../lib/interface/Arma');
var Couracado = require('../lib/armas/Couracado');
var Cruzador = require('../lib/armas/Cruzador');
var Hidroaviao = require('../lib/armas/Hidroaviao');
var PortaAvioes = require('../lib/armas/PortaAvioes');
var Submarino = require('../lib/armas/Submarino');

describe("Validando estrutura das Classes base", function() {
	describe("Classe arma", function() {
		var lancha = new Arma('lancha',1);

		it('Arma lancha', function() {
			 //console.log(navio);
       assert.equal(1,lancha.partesRestante());
       assert.equal('lancha',lancha.nome);
		});

		it('Arma Submarino',function(){
			let submarino = new Submarino();
			assert.equal(1,submarino.partesRestante());
			assert.equal('Submarino',submarino.nome);
		});
		it('Arma Cruzador',function(){
			let cruzador = new Cruzador();
			assert.equal(2,cruzador.partesRestante());
			assert.equal('Cruzador',cruzador.nome);
		});
		it('Arma Hidroaviao',function(){
			let hidroaviao = new Hidroaviao();
			assert.equal(3,hidroaviao.partesRestante());
			assert.equal('HidroAvião',hidroaviao.nome);
		});
		it('Arma Couracado',function(){
			let couracado = new Couracado();
			assert.equal(4,couracado.partesRestante());
			assert.equal('Couraçado',couracado.nome);
		});
		it('Arma PortaAvioes',function(){
			let portaAvioes = new PortaAvioes();
			assert.equal(5,portaAvioes.partesRestante());
			assert.equal('Porta Aviões',portaAvioes.nome);
		});
	});
	describe("Testar Destruição de um submarino", function() {
		let submarino = new Submarino();
		submarino.destruirUmaParte();
		it("Submarino Afundado",function(){
				assert.equal(true,submarino.verificarDestruicao());
		});
	});
	describe("Testar Destruição de um portaAvioes", function() {

		let portaAvioes = new PortaAvioes();
		portaAvioes.destruirUmaParte();

		it("portaAvioes não Afundado",function(){
				assert.equal(false,portaAvioes.verificarDestruicao());
		});
		it("portaAvioes Afundado",function(){
			portaAvioes.destruirUmaParte();
			portaAvioes.destruirUmaParte();
			portaAvioes.destruirUmaParte();
			portaAvioes.destruirUmaParte();
				assert.equal(0,portaAvioes.partesRestante());
		});
	});
});
