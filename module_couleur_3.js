"use strict";

var couleur2 = function(palier2, pc, qb){
	var recup2 = [];

	if( palier2 > 1){
		recup2[0] = "j2";
	}
	if( palier2 === 0){
		recup2[1] = "j2";
	}
	if( palier2 > 2){
		recup2[1] = "j2";
	}
	if( palier2 > 3){
		recup2[2] = "j2";
	}
	if( palier2 > 4){
		recup2[3] = "j2";
	}
	if( palier2 > 5){
		recup2[4] = "j2";
	}
	if( palier2 > 6){
		recup2[5] = "j2";
	}
	if( palier2 > 7){
		recup2[6] = "j2";
	}
	if( palier2 > 8){
		recup2[7] = "j2";
	}
	if( palier2 > 9){
		recup2[8] = "j2";
	}
	if( palier2 > 10){
		recup2[9] = "j2";
	}
	if( palier2 > 11){
		recup2[10] = "j2";
	}
	if( palier2 > 12){
		recup2[11] = "j2";
	}
	if( palier2 > 13){
		recup2[12] = "j2";
	}
	if( palier2 > 14){
		recup2[13] = "j2";
	}
	if( palier2 > 15){
		recup2[14] = "j2";
	}
	if( palier2 > 16){
		recup2[15] = "j2";
	}

	if(pc !== qb && palier2 === 1){
		recup2[0] = "j3";
	}
	else if( pc === qb && palier2 === 1 ){
		recup2[0] = "j2";
	}
	if(pc !== qb && palier2 === 2){
		recup2[1] = "j3";
	}
	else if( pc === qb && palier2 === 2 ){
		recup2[1] = "j2";
	}
	if(pc !== qb && palier2 === 3){
		recup2[2] = "j3";
	}
	else if( pc === qb && palier2 === 3 ){
		recup2[2] = "j2";
	}
	if(pc !== qb && palier2 === 4){
		recup2[3] = "j3";
	}
	else if( pc === qb && palier2 === 4 ){
		recup2[3] = "j2";
	}
	if(pc !== qb && palier2 === 5){
		recup2[4] = "j3";
	}
	else if( pc === qb && palier2 === 5 ){
		recup2[4] = "j2";
	}
	if(pc !== qb && palier2 === 6){
		recup2[5] = "j3";
	}
	else if( pc === qb && palier2 === 6 ){
		recup2[5] = "j2";
	}
	if(pc !== qb && palier2 === 7){
		recup2[6] = "j3";
	}
	else if( pc === qb && palier2 === 7 ){
		recup2[6] = "j2";
	}
	if(pc !== qb && palier2 === 8){
		recup2[7] = "j3";
	}
	else if( pc === qb && palier2 === 8 ){
		recup2[7] = "j2";
	}

	if(pc !== qb && palier2 === 9){
		recup2[8] = "j3";
	}
	else if( pc === qb && palier2 === 9 ){
		recup2[8] = "j2";
	}
	if(pc !== qb && palier2 === 10){
		recup2[9] = "j3";
	}
	else if( pc === qb && palier2 === 10 ){
		recup2[9] = "j2";
	}
	if(pc !== qb && palier2 === 11){
		recup2[10] = "j3";
	}
	else if( pc === qb && palier2 === 11 ){
		recup2[10] = "j2";
	}
	if(pc !== qb && palier2 === 12){
		recup2[11] = "j3";
	}
	else if( pc === qb && palier2 === 12 ){
		recup2[11] = "j2";
	}
	if(pc !== qb && palier2 === 13){
		recup2[12] = "j3";
	}
	else if( pc === qb && palier2 === 13 ){
		recup2[12] = "j2";
	}
	if(pc !== qb && palier2 === 14){
		recup2[13] = "j3";
	}
	else if( pc === qb && palier2 === 14 ){
		recup2[13] = "j2";
	}
	if(pc !== qb && palier2 === 15){
		recup2[14] = "j3";
	}
	else if( pc === qb && palier2 === 15 ){
		recup2[14] = "j2";
	}
	if(pc !== qb && palier2 === 16){
		recup2[15] = "j3";
	}
	else if( pc === qb && palier2 === 16 ){
		recup2[15] = "j2";
	}

	return recup2;
}
module.exports = couleur2;

