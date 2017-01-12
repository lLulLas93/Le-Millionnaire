// REQUETE QUI AFFICHE LA PAGE FIN
"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var page;
	var question;
	var nom_fichier_partie;
	var contenu_fichier;
	var contenu;
	var nom_fichier_partie;
	var partie;
	var br;
	var questions;
	var question;
	var niveau;
	var x;
	// AFFICHAGE DU JEU

	nom_fichier_partie = query.pseudo + ".json";
	contenu_fichier = fs.readFileSync(nom_fichier_partie, "UTF-8");
	partie = JSON.parse(contenu_fichier);

	contenu = fs.readFileSync('questions.json', 'utf-8');
	questions = JSON.parse(contenu);

	//	console.log(partie.niveau[i]);
	//	console.log(partie.somme);
	//	if(partie.niveau[1] <= partie.somme[4] || partie.niveau[   ){
	//	console.log("azeazeaze");
	//	}
	var ns;

	/*	partie.niveau[1] = partie.somme[0];
		partie.niveau[2] = partie.somme[0];
		partie.niveau[3] = partie.somme[0];
		partie.niveau[4] = partie.somme[0];
		partie.niveau[5] = partie.somme[4];
		partie.niveau[6] = partie.somme[4];
		partie.niveau[7] = partie.somme[4];
		partie.niveau[8] = partie.somme[4];
		partie.niveau[9] = partie.somme[4];
		partie.niveau[10] = partie.somme[9];
		partie.niveau[11] = partie.somme[9];
		partie.niveau[12] = partie.somme[9];
		partie.niveau[13] = partie.somme[9];
		partie.niveau[14] = partie.somme[9];
		partie.niveau[15] = partie.somme[14];
*/	var marqueurs = {};

	if(partie.somme <= 1000) {
		marqueurs.ns = "0";
	}
	else if(partie.somme > 1000 && partie.somme <= 32000){
		marqueurs.ns = "1000";
	}
	else{
		marqueurs.ns = "32000";
	}



 //	else if(partie.niveau <= 32000 && partie.niveau > 1000) {
//		partie.somme = 1000;
//		marqueurs.ns = partie.somme;
//	}else{
//		partie.somme = 32000;
//		marqueurs.ns = partie.somme;
//	}	











	question = [];


	marqueurs.pseudo = query.pseudo;
	//	marqueurs.reponse = question.reponse[partie.choix-1];
	marqueurs.niveau = partie.niveau;
	marqueurs.somme = partie.somme;
	//	marqueurs.br = question.reponses[x];
	partie.choix = partie.choix -1;
	//	marqueurs.ecrit = question.q
	page = fs.readFileSync('modele_fin.html', 'utf-8');

	page = page.supplant(marqueurs);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------------------------------------------------------------------------

module.exports = trait;


