// REQUETE QUI AFFICHE PAGE DE FIN
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

	var ns;

	var marqueurs = {};
	
	if(partie.somme === 0){
		marqueurs.ns ="0";
	}
	else if(partie.somme === 100) {
		marqueurs.ns = "100";
	} 
	else if(partie.somme === 200) {
		marqueurs.ns = "200";
	}
	else if(partie.somme === 300) {
		marqueurs.ns = "300";
	}
	else if(partie.somme === 500) {
		marqueurs.ns = "500";
	}
	else if(partie.somme === 1000) {
		marqueurs.ns = "1000";
	}
	else if(partie.somme === 2000) {
		marqueurs.ns = "2000";
	}
	else if(partie.somme === 4000) {
		marqueurs.ns = "4000";
	}
	else if(partie.somme === 8000) {
		marqueurs.ns = "8000";
	}
	else if(partie.somme === 16000) {
		marqueurs.ns = "16000";
	}
	else if(partie.somme === 32000) {
		marqueurs.ns = "32000";
	}
	else if(partie.somme === 64000) {
		marqueurs.ns = "64000";
	}
	else if(partie.somme === 125000) {
		marqueurs.ns = "125000";
	}
	else if(partie.somme === 250000) {
		marqueurs.ns = "250000";
	}
	else if(partie.somme === 500000) {
		marqueurs.ns = "500000";
	}
	else if( partie.somme === 1000000) {
		marqueurs.ns = "1000000";
	}




	question = []; 

	marqueurs.pseudo = query.pseudo;
	//  marqueurs.reponse = question.reponse[partie.choix-1];
	marqueurs.niveau = partie.niveau;
	marqueurs.somme = partie.somme;
	//  marqueurs.br = question.reponses[x];
	partie.choix = partie.choix -1;
	//  marqueurs.ecrit = question.q


	page = fs.readFileSync('modele_fin.html', 'utf-8');

	page = page.supplant(marqueurs);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//--------------------------------------------------------------------------

module.exports = trait;


