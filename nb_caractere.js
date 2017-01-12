"use strict";

var tester_nb = function(i) {

	var i;
	var correct;

	correct = true;

	if ( i.length <= 5) {
	correct = true;
	}else {
	correct = false;
	}
 return correct;
 }
module.exports = tester_nb;
