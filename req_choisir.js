// REQUETE QUI AFFICHE LA PAGE SUSPENSE
"use strict";

var fs = require("fs");
require('remedial');

var trait = function (req, res, query) {

	var page;
	var questions;
	var question;
	var marqueurs;
	var contenu_fichier;
	var nom_fichier_partie;
	var partie;
	var niveau;
	var x;
	// MEMORISE REPONSE

	nom_fichier_partie = query.pseudo + ".json";
	contenu_fichier = fs.readFileSync(nom_fichier_partie, "UTF-8");
	partie = JSON.parse(contenu_fichier);

	partie.choix = query.choix;

	contenu_fichier = JSON.stringify(partie);
	fs.writeFileSync(nom_fichier_partie, contenu_fichier, 'utf-8');

	// RECHERCHE LA QUESTION

	contenu_fichier = fs.readFileSync("questions.json", "UTF-8");
	questions = JSON.parse(contenu_fichier);

	question = questions[partie.niveau][partie.no_q];
	x = question.br;
	// ... PAGE ....

	marqueurs = {};

	marqueurs.reponsea = question.reponses[0];
	marqueurs.reponseb = question.reponses[1];
	marqueurs.reponsec = question.reponses[2];
	marqueurs.reponsed = question.reponses[3];
	marqueurs.reponse = question.reponses[partie.choix -1 ];
	marqueurs.br = question.reponses[x];

	marqueurs.classea = "";
	if (marqueurs.reponse === marqueurs.reponsea){
		marqueurs.classea = "jaune";
	}

	marqueurs.classeb = "";
	if (marqueurs.reponse === marqueurs.reponseb){
		marqueurs.classeb = "jaune";
	}

	marqueurs.classec = "";
	if (marqueurs.reponse === marqueurs.reponsec){
		marqueurs.classec = "jaune"
	}

	marqueurs.classed = "";
	if (marqueurs.reponse === marqueurs.reponsed){
		marqueurs.classed = "jaune";
	}

	marqueurs.display1 = 'disabled="disabled"';
	marqueurs.display2 = 'disabled="disabled"';
	marqueurs.display3 = 'disabled="disabled"';
	marqueurs.display4 = 'disabled="disabled"';

	marqueurs.pseudo = query.pseudo;
	marqueurs.ecrit = question.q;

//.......................... MODULE COULEUR PALIER DE LA FORTUNE ......................................//
	var couleur2 = require("./module_couleur_2.js"); 
	var palier2 = partie.niveau;
	var recup2 = couleur2(palier2, palier3);
	var palier3 = partie.br;
    var i;

	for(i=0; i < 15; i++) {
		marqueurs["c" + (i + 1) ] = recup2[i];
	}
//..........................................FIN MODULE PALIER............................................//
	console.log(partie.choix +  "choix du joueur");
	console.log(question.br + "bonne reponse");
	page = fs.readFileSync('modele_suspense.html', 'utf-8');
	page = page.supplant(marqueurs);

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;
