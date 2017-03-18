"use strict";

var marqueurs;


var cboutton = function(rouge, vert, jaune) {
	var marqueurs;
	var i;

	marqueurs = {};

	for(i=1; i<5; i++) {
		marqueurs["classe" + i] = "";
	}

	if(rouge !== 0) {
		marqueurs["classe" + rouge] = "j3";
	}
	if(vert !== 0) {
		marqueurs["classe" + vert] = "j2";
	}
	if(jaune !== 0) {
		marqueurs["classe" + jaune] = "j1";
	}

	return marqueurs;
};

module.exports = cboutton;



