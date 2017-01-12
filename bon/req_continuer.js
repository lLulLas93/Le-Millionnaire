// REQUEnE QUI AFFICHE LA PAGE  JEUX
"use strict";
require('remedial');

var trait = function (req, res, query) {

	var page;
	var fs = require('fs');
	var questions;
	var trouve;
	var contenu_fichier;
	var marqueurs;
	var nom_fichier_partie;
	var niveau;
	var contenu;
	var questions;
	var question;
	var partie;
	var x;
	var somme;
	var i;
	// LECTURE DES QUESTIONS

	nom_fichier_partie = query.pseudo + ".json";
	contenu_fichier = fs.readFileSync(nom_fichier_partie, "UTF-8");
	partie = JSON.parse(contenu_fichier);
	
	partie.choix = query.choix;

	contenu_fichier = JSON.stringify(partie);
	fs.writeFileSync(nom_fichier_partie, contenu_fichier, 'utf-8');
	
	contenu_fichier = fs.readFileSync('questions.json','utf-8');
	questions = JSON.parse(contenu_fichier);

	// PASSAGE A QUESTION SUVANTE

	if(partie.niveau === 14) {
		page = fs.readFileSync('modele_gagne.html', 'utf-8');

		var marqueurs = {};
		marqueurs.pseudo = query.pseudo;
		marqueurs.somme = partie.somme++;
	} else {

		i = partie.niveau;
		somme = []; 

		somme[0] = 100; 
		somme[1] = 200;
		somme[2] = 300;
		somme[3] = 500;
		somme[4] = 1000;
		somme[5] = 2000;
		somme[6] = 4000;
		somme[7] = 8000;
		somme[8] = 16000;
		somme[9] = 32000;
		somme[10] = 64000;
		somme[11] = 125000;
		somme[12] = 250000;
		somme[13] = 500000;
		somme[14] = 1000000;

		partie.somme = somme[i];
		partie.niveau++;

		console.log(partie.somme);	

		partie.no_q = Math.floor(Math.random()*questions[partie.niveau].length);

		question = questions[partie.niveau][partie.no_q];
		x = question.br;

		contenu_fichier = JSON.stringify(partie);
		fs.writeFileSync(nom_fichier_partie, contenu_fichier, 'utf-8');

		// .... PAGE ....

		page = fs.readFileSync('modele_jeux.html', 'UTF-8');

		var marqueurs = {};
		
		marqueurs.pseudo = query.pseudo;
		marqueurs.ecrit = question.q;
		marqueurs.reponsea = question.reponses[0];
		marqueurs.reponseb = question.reponses[1];
		marqueurs.reponsec = question.reponses[2];
		marqueurs.reponsed = question.reponses[3];
		marqueurs.br = question.reponses[x];
		marqueurs.niveau = partie.niveau;
		marqueurs.somme = partie.somme++;
		marqueurs.ami = partie.nom_ami;
		marqueurs.a = "";
		marqueurs.b = "";
		marqueurs.c = "";
		marqueurs.d = "";
		marqueurs.s = "";
		
		if (partie.cinquante === false) {
			marqueurs.cinquante = 'disabled="disabled"';
		} 
		if (partie.publique === false) {
			marqueurs.publique = 'disabled="disabled"';
		}
		if (partie.ami === false) {
			marqueurs.ami = 'disabled="disabled"';
		}

//................ MODULE 2 COULEUR  PALIER DE LA FORTUNE ............................//

		var couleur2 = require("./module_couleur_2.js");
		var palier2 = partie.niveau;
		var recup2 = couleur2(palier2);
		
		for(i=0; i < 15; i++){
			marqueurs["c" + (i +1)] = recup2[i];
		}
//.................FIN MODULE 2 COULEUR PALIER DE LA FORTUNE........................//
	}
	page = page.supplant(marqueurs);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(page);
	res.end();
};
//--------------------------------------------------------------------------

module.exports = trait;
