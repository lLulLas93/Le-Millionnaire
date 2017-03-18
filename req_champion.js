"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var marqueurs;
	var pseudo;
	var page;
	var contenu_fichier;
	var nom_fichier_partie;
	var partie;
	var no_q_nouveau;
	var trouve;
	var reponse;
	var contenu;
	var trouve;


	// ON LIT LES COMPTES EXISTANTS
   
   nom_fichier_partie = query.pseudo + ".json";
	    contenu_fichier = fs.readFileSync(nom_fichier_partie, "UTF-8");
		    partie = JSON.parse(contenu_fichier);

	contenu = fs.readFileSync("questions.json", 'utf-8');
	trouve = JSON.parse(contenu);

	// AJOUTDE LA QUESTION DANS LA LISTE
	
	no_q_nouveau = {};
	reponse = [];
	no_q_nouveau.q = query.question; 
	no_q_nouveau.br = query.br;
	reponse[0] = query.reponsea;
	reponse[1] = query.reponseb;
	reponse[2] = query.reponsec;
	reponse[3] = query.reponsed;
	no_q_nouveau.reponse = reponse; 

trouve[trouve.length] = no_q_nouveau;
contenu = JSON.stringify(trouve);
fs.writeFileSync("questions.json", contenu,'UTF-8');

	// SI IDENTIFICATION OK, ON ENVOIE PAGE ACCUEIL MEMBRE

	page = fs.readFileSync('modele_accueil_membre.html', 'UTF-8');
	marqueurs = {};
	marqueurs.pseudo = query.pseudo;

	page = page.supplant(marqueurs);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};

//---------------------------------------------------------------------------

module.exports = trait;

